#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Aug 18 15:04:11 2018

@author: cx513
"""

import TimeSeries_one_ts
import pandas as pd
import numpy as np

#usd=pd.read_csv('USDdidTotal.csv',names=['Date','USD'])
#eth=pd.read_csv('ETHdidTotal.csv',names=['Date','ETH'])

eth=pd.read_excel('ETHdidTotal.xls',names=['Date','ETH'])

eth['ETH']=eth['ETH']/eth['ETH'].values[0]*1000



url=plotlyslider(eth['Date'],eth['ETH'],\
                 name1='Strategy Performance',TITLE='Strategy Performance')