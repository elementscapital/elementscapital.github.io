#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Aug  1 16:44:49 2018

@author: cx513
"""


import plotly
###Important
#Please change the following line to your
#own api from plotly if you want to edit the output plots.
###
plotly.tools.set_credentials_file(username='suzukaze',\
                                  api_key='tuJEp6bN9sRCxYMI9pVn')
import plotly.plotly as py
import plotly.graph_objs as go
import pandas as pd
from datetime import datetime
#import pandas_datareader.data as web
#import quandl
#quandl.ApiConfig.api_key = "bi9w2Bj4FGiMCpUGA153"
#quandl.ApiConfig.api_version = '2015-04-09'



def plotlyslider(date1,Y1,date2,Y2,name1='1',name2='2',\
                 TITLE='Time Series with Rangeslider'):

    trace_1 = go.Scatter(
            x=date1,
            y=Y1,
            name = name1,
            yaxis='y',
            line = dict(color = '#85BB65',width=3),
            opacity = 0.8)

    trace_2 = go.Scatter(
            x=date2,
            y=Y2,
            name = name2,
            yaxis='y2',
            line = dict(color = '#8197EE',width=3),
            opacity = 0.8)

    data = [trace_1,trace_2]

    layout = dict(
            title=TITLE,
            #start of xaxis
            xaxis=dict(
                rangeselector=dict(
                    buttons=list([
                        dict(count=1,
                             label='1m',
                             step='month',
                             stepmode='backward'),
                        dict(count=3,
                             label='3m',
                             step='month',
                             stepmode='backward'),
                        dict(count=6,
                             label='6m',
                             step='month',
                             stepmode='backward'),
                        dict(count=1,
                             label='YTD',
                             step='year',
                             stepmode='todate'),
                        dict(count=1,
                             label='1y',
                             step='year',
                             stepmode='backward'),
                        dict(count=3,
                             label='3y',
                             step='year',
                             stepmode='backward'),
                        dict(step='all')
                        ])
                ),
            rangeslider=dict(
                visible = True
            ),
                type='date'
            ),
        yaxis=dict(
            title=name1,
            titlefont=dict(
                    color= '#85BB65'
            ),
            tickfont=dict(
                    color='#85BB65'
        )
        ),
        yaxis2=dict(
            title=name2,
            titlefont=dict(
                color= '#8197EE'
            ),
            tickfont=dict(
                color='#8197EE'
            ),
            overlaying='y',
            side='right'
            ),  
        #end of xaxis
        legend=dict(orientation="h")
            
    )

    fig = dict(data=data, layout=layout)
    #fileopt='overwrite'
    url=py.plot(fig,auto_open=False,filename='crypto',fileopt='new')
    return url



#demo
#df = web.DataReader('AAPL', 'iex',datetime(2014, 10, 1),datetime(2018, 4, 1))

#plotlyslider(df.index,df['close'],df['volume'])
    
'''
        yaxis=dict(
            title=name1,
            titlefont=dict(
                    color= '#17BECF'
            ),
            tickfont=dict(
                    color='#17BECF'
        )
        ),
        yaxis2=dict(
            title=name2,
            titlefont=dict(
                color= '#7F7F7F'
            ),
            tickfont=dict(
                color='#7F7F7F'
            ),
            overlaying='y',
            side='right'
            )   
'''
