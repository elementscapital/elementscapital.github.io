#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Aug 12 14:29:54 2018

@author: cx513
"""


import cv2
import numpy as np

#-1 read in alpha channel
pic1=cv2.imread("client-logos.png",-1)

def pacifier(input):
    pic=input.copy()
    b,g,r,a=cv2.split(pic)
    shape=b.shape
    b=b*0
    g=g*0
    r=r*0
    a=a*0
    return cv2.merge((b,g,r,a))

cv2.imwrite("placeholder_clients.png",pacifier(pic1))