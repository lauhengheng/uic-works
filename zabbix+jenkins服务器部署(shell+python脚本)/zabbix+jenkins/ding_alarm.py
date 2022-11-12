#!/usr/bin/python2
# -*- coding: utf-8 -*-
# Author: lauheng
import requests
import json
import sys
import os

headers = {'Content-Type': 'application/json;charset=utf-8'}
api_url = "钉钉机器人接口url"


def msg(text):
    json_text = {
        "msgtype": "text",
        "at": {
            "atMobiles": [
                "想@的人的电话号码"
            ],
            "isAtAll": False
        },
        "text": {
            "content": "业务报警" + text
        }
    }
    print
    requests.post(api_url, json.dumps(json_text), headers=headers).content


if __name__ == '__main__':
    text = sys.argv[1]
    msg(text)

