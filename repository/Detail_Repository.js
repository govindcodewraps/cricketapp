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

              var results = resUrl["media_details"];
              results = results['sizes'];
// get the first result set, or you can loop trhrough all, assuming that each reuslt set is the same. 
if (results.length > 0){ 
  var columnsIn = results[0]; 
  for(var key in columnsIn){
    console.log(key); // here is your column name you are looking for
  } 
}else{
    console.log("No columns");
}
              
              if(resUrl.media_details.sizes.medium_large.source_url){
                resCNews._links['wp:featuredmedia'][0].href = resUrl.media_details.sizes.medium_large.source_url;
                console.log("Detail_Repository.js, image url True : ", resCNews._links['wp:featuredmedia'][0].href);
              }else{
                resCNews._links['wp:featuredmedia'][0].href = resUrl.media_details.sizes.td_0x420.source_url;
                console.log("Detail_Repository.js, image url False : ", resCNews._links['wp:featuredmedia'][0].href);
              }
            } catch (e) {
              console.error(e);
            }
            //resCNews[0]._links['wp:featuredmedia'][0].href = ImgUrl;
            
            console.log("Detail_Repository.js, data : ", resCNews);
            
            return resCNews;
        } catch (e) {
          console.error(e);
        }
    }

}

  const DR = new DetailRepository();

  export default DR;