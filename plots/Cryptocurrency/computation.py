#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Aug 18 15:04:11 2018

@author: cx513
"""

import TimeSeriesPlot2d
import pandas as pd
import numpy as np

#usd=pd.read_csv('USDdidTotal.csv',names=['Date','USD'])
#eth=pd.read_csv('ETHdidTotal.csv',names=['Date','ETH'])

usd=pd.read_excel('USDdidTotal.xls',names=['Date','USD'])
eth=pd.read_excel('ETHdidTotal.xls',names=['Date','ETH'])

paddingtime=usd['Date'][0:len(usd)-len(eth)]
pre=pd.DataFrame({'Date':paddingtime,'ETH':[np.nan]*(len(usd)-len(eth))})
eth=pre.append(eth)
eth.index=range(0,len(eth))



url=plotlyslider(usd['Date'],usd['USD'],eth['Date'],eth['ETH'],\
             name1='NAV in USD',name2='NAV in ETH',TITLE='Profits of Strategy')