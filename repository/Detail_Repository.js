import React, { Component } from 'react';

import BaseUrl from "../AppConfig";

class DetailRepository {

    //-----------------------------
    async Get_Detail (urll) {
      console.log("Detail_Repository.js, Get_Detail, Page ID : ", urll);
      let resCNews=[];
      try {
          resCNews = await fetch(BaseUrl+'posts/'+urll, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          });
          resCNews = await resCNews.json();
          // console.log("HomeScreen.js, GETData",res[0].date);
          // console.log("HomeScreen.js, GETData",res.length);
          let ImgUrl='';
            try {
              let resUrl = await fetch(resCNews._links['wp:featuredmedia'][0].href, {
                method: 'GET',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
              });
              resUrl = await resUrl.json();

              resCNews._links['wp:featuredmedia'][0].href = resUrl.media_details.sizes.full.source_url;
            } catch (e) {
              console.error(e);
            }
            
            return resCNews;
        } catch (e) {
          console.error(e);
        }
    }
    //-----------------------------
    async Get_SeriesMenuPage(urll) {
      console.log("Detail_Repository.js, Get_Detail, Page ID : ", urll);
      let resCNews=[];
      try {
          resCNews = await fetch(BaseUrl+'posts?categories='+urll, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          });
          resCNews = await resCNews.json();
          // console.log("HomeScreen.js, GETData",res[0].date);
              let l = 0, ImgUrl='', resUrl;
              for(l=0; l<resCNews.length; l++){
                try {
                  resUrl = await fetch(resCNews[l]._links['wp:featuredmedia'][0].href, {
                    method: 'GET',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                    },
                  });
                  resUrl = await resUrl.json();
                  //ImgUrl = resUrl.media_details.sizes.medium.source_url;
                } catch (e) {
                  console.error(e);
                }
                resCNews[l]._links['wp:featuredmedia'][0].href = resUrl.media_details.sizes.full.source_url;
                if(l>=resCNews.length-1){
                  return resCNews;
                }
              }
    
        } catch (e) {
          console.error(e);
        }
    }

}

  const DR = new DetailRepository();

  export default DR;