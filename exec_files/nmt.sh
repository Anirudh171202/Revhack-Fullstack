#!/bin/bash

text=$1

curl --location --request POST 'https://hackapi.reverieinc.com/nmt' --header 'token: d4b6f130928765eaa5cf9c632f7c7eca55f3fb5d' \
--header 'Content-Type: application/json' \
--data-raw "{ \"data\": [\"$text\"], \"tgt\": \"hi\", \"src\": \"en\"}"