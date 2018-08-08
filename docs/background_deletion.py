#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Aug  8 20:10:41 2018

@author: cx513
"""

import cv2
import numpy as np

pic1=cv2.imread("heptadecagon++.png",-1)

def whitetotrans(input):
    pic=input.copy()
    b,g,r,a=cv2.split(pic)
    shape=b.shape
    for i in range(shape[0]):
        for j in range(shape[1]):
            if b[i,j]==255:
                if g[i,j]==255:
                    if r[i,j]==255:
                            a[i,j]=0
    return cv2.merge((b,g,r,a))


def makesquare(input):
    Cx = input.shape[0]/2
    Cy = input.shape[1]/2
    side=min(input.shape[0:2])
    return input[int(Cx-side/2):int(Cx+side/2),int(Cy-side/2):int(Cy+side/2)]

def resize(input, scale):
    shape=input.shape
    return cv2.resize(input,(int(shape[0]*scale),int(shape[1]*scale)))