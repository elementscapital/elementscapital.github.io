#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Aug  8 20:10:41 2018

@author: cx513
"""

import cv2
import numpy as np

pic1=cv2.imread("output.jpg",-1)


#white to transparent
def whitetotransvec(input):
    pic=input.copy()
    if len(cv2.split(pic))==4:
        b,g,r,a=cv2.split(pic)
    else:
        b,g,r=cv2.split(pic)
        a=255*np.ones(b.shape,dtype = "uint8")
    logicalM=np.logical_and(b==255,g==255,r==255)
    a=np.multiply(a,np.logical_not(logicalM))
    return cv2.merge((b,g,r,a))

def alphareverse(input):
    b,g,r,a=cv2.split(input)
    a=255-a
    return cv2.merge((b,g,r,a))

def colorinverse(input):
    b,g,r,a=cv2.split(input)
    b=255-b
    g=255-g
    r=255-r
    return cv2.merge((b,g,r,a))
    
    


def makesquare(input):
    Cx = input.shape[0]/2
    Cy = input.shape[1]/2
    side=min(input.shape[0:2])
    return input[int(Cx-side/2):int(Cx+side/2),int(Cy-side/2):int(Cy+side/2)]

def resize(input, scale):
    shape=input.shape
    return cv2.resize(input,(int(shape[0]*scale),int(shape[1]*scale)))


#cv2.imwrite("placeholder_clients.png",pacifier(pic1))
#cv2.imwrite("trans_alt.png",resize(makesquare(alphareverse(aaa)),0.5))