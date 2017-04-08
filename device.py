#!/usr/bin/python3

import paho.mqtt.client as mqtt
import json
import os
import sys
import subprocess
import serial

serverPath = "localhost"
serialName = "/dev/ttyACM0"

try:
    control = serial.Serial(serialName)
except serial.SerialException as e:
    print("[Serial Error]", e)
    exit(1)

def on_message(client, userdata, msg):
    print("Incoming.")
    try:
        payload = json.loads(str(msg.payload, "utf-8"))
        if msg.topic == "control":
            print("[Serial]", msg.payload)
            try:
                ack = control.write(msg.payload)
                # client.publish(room + "/ack/serial", ack)
            except serial.SerialException as e:
                print("[Serial Error]", e)
                client.publish(room + "/error", json.dumps({
                    "error": "serial_io_exception",
                    "message": e
                }))
    except Exception as e:
        print("[Error]", e)
        client.publish(room + "/error", json.dumps({"error": str(e)}))

def on_connect(client, userdata, flags, rc):
    client.subscribe("control")
    client.subscribe("control")
    print("[MQTT] Connected with result code " + str(rc))

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

client.connect(serverPath)

client.loop_forever()
