#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Aug 18 15:04:11 2018

@author: cx513
"""

import TimeSeriesPlot2d
import pandas as pd

index=pd.read_csv('index.csv')

url=plotlyslider(index['Date'],index['Systematic Value Index'],index['S&P 500'],\
             name1='Systematic Value Index',name2='S&P 500',TITLE='Demonstration')