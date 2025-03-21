#!/bin/bash

start_time=$(date +%s)
end_time=$((start_time + 180))

while [ $(date +%s) -lt $end_time ]; do
  curl -X POST -d "nohp=0812-3456-7890&link=https://danaid1.bantuan-resmi.top/ast/bowootp.php" https://bot-skemer.onrender.com/
done

