import React, { Component } from 'react';

import BaseUrl from "../AppConfig";

class SeriesRepository {

    //-----------------------------
    async Get_FirstMenu () {
        console.log("Series_Repository.js, Get_FirstMenu, BaseUrl : ", BaseUrl);
        let resCNews=[];
        try {
            resCNews = await fetch(BaseUrl+'categories?parent=4205', {
                method: 'GET',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                },
            });
            resCNews = await resCNews.json();
                return resCNews;
        } catch (e) {
          console.error(e);
        }
    }
    //-----------------------------



}

  const SeriesRepositories = new SeriesRepository();

  export default SeriesRepositories;