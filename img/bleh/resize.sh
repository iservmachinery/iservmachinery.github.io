#!/bin/bash
for file in *.jpg
do
    sips --resampleHeightWidthMax 1357 --out out --setProperty formatOptions 85 $file
done;
