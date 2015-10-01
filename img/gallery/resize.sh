#!/bin/bash
for file in *.jpg
do
    sips --resampleHeightWidthMax 1024 --out out --setProperty formatOptions 85 $file
done;
