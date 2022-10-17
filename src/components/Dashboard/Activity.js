import React, { useState, useEffect } from 'react';

import './table.css';

import profile_pic from "../Content/MyLemon.jpg"

import opensea_log from "../Content/OpenSea.png"
import reservoir_log from "../Content/reservoir.png"
import looksrare_log from "../Content/looksrare.png"
import x2y2_log from "../Content/x2y2.png"


export function Activity() {

    // HARDCODED FOR THE MOMENT... SHOULD ADD A CONNECTOR TO THE LIVE API.
    //got a "None is not defined" error.. will temporarily fix with:

    let None = null;
    let False = false;

    let user_data = [{
    'from_address': '0xd722755aa3d8b2e9521209ee5014d0e446b82ff5',
    'marketplace_name': 'x2y2',
    'order_side': 'bid',
    'price': 0.02576,
    'timestamp': 1666007187,
    'to_address': None,
    'token_id': None,
    'type': 'bid'},
   {
    'from_address': '0xb7ea0d72c0af95ddb9ee71e68dd14a5719b92bea',
    'marketplace_name': 'opensea',
    'order_side': 'ask',
    'price': 0.057,
    'timestamp': 1666007195,
    'to_address': '0x9433bc4563b23287d6197c539870b54469fa4197',
    'token_id': '8153',
    'type': 'sale'},
   {    
   'from_address': '0xb7ea0d72c0af95ddb9ee71e68dd14a5719b92bea',
    'marketplace_name': None,
    'order_side': None,
    'price': 0,
    'timestamp': 1666007195,
    'to_address': '0x9433bc4563b23287d6197c539870b54469fa4197',
    'token_id': '8153',
    'type': 'transfer'},
   {
    'from_address': '0xb28c2f747ce0092f5a15b33feac94006d9c4526d',
    'marketplace_name': 'opensea',
    'order_side': 'bid',
    'price': 0.18909,
    'timestamp': 1666007205,
    'to_address': None,
    'token_id': '57',
    'type': 'bid'},
   {
    'aggregator_address': '',
    'aggregator_name': '',
    'block_hash': '0x761478ed6eea2baf000714580ae6a2a8fed1c0e9d18ce8c81058870b7856958b',
    'block_number': 15767617,
    'bundle': False,
    'buyer': '0xca4da6a4c5c3ef85fc9d8e948fb6074e9968f2e5',
    'collection_address': '0x49adcc97404c197190a5866885018c558006974a',
    'currency': 'ETH',
    'hash': '0xa1706394b62989035cdf4e6a35012fb09cc9c347b0a05f70aa7de460e02d82af',
    'id': '1b580297-4912-3c2e-a2a2-6cfb6c3364ca',
    'marketplace_address': '0x00000000006c3852cbef3e08e8df289169ede581',
    'marketplace_name': 'opensea',
    'mint': False,
    'price': 0.056,
    'seller': '0xb7ea0d72c0af95ddb9ee71e68dd14a5719b92bea',
    'timestamp': 1666007207,
    'token_id': '4553',
    'type': 'sale'},
   {
    'from_address': '0x2e7f8bcfd7931c6d4eef754452b2095d5cd255f0',
    'marketplace_name': 'opensea',
    'order_side': 'ask',
    'price': 0.056,
    'timestamp': 1666007208,
    'to_address': None,
    'token_id': '7773',
    'type': 'ask'}];




    const _html = user_data.map(

        (elem) => {

            let ordertype = elem.type.charAt(0).toUpperCase() + elem.type.slice(1);

            let tokenid = elem.token_id;
    
    
            let stamp = elem.timestamp;
            let DateObj = new Date(stamp * 1000).toISOString();
    
            let ymd = DateObj.split("T")[0];
            let hms = DateObj.split("T")[1].split(".")[0];
    
            let alldate = '' + ymd + ' \xa0' +  hms;
    
    
            let pricex = elem.price.toFixed(3);
            if(pricex == 0){
                pricex = "-"
            }
    
            let placename = elem.marketplace_name;
            console.log(placename)
    
            let image_logo = null;
    
            if(placename === null){
                placename = "-";
            }else if(placename === "x2y2"){
                image_logo = x2y2_log;

            }else if(placename ==="opensea"){
                image_logo = opensea_log;
    
            }else if(placename === "looksrare"){
                image_logo = looksrare_log;
    
            }else if(placename === "reservoir"){
                image_logo = reservoir_log;
    
            }

            return (
                <tr>
                    <td>{ordertype}</td>
                    <td>{tokenid}</td>
                    <td>{alldate}</td>
                    <td>{pricex}</td>
                    <td>{<img src={image_logo} alt="img logo" className='imagelogo' width="20px"></img>}</td>
                </tr>

                //placename
            )
        }
    );





    return (
        <div className='activity'>

            <img src={profile_pic} alt="profile_pic" width="100" className='profile_pic'/>
            
            <h1>Azuki</h1>
            <div className='grey1'>
                <h2 className='address'>0x3943...2103</h2>
            </div>



            <table className="tableActivity">
                <tbody>

                    <tr className="titles">
                        <th>Trade</th>
                        <th>TokenId</th>
                        <th>Time</th>
                        <th>Price (ETH)</th>
                        <th>Marketplace</th>
                    </tr>

                    {_html}

                </tbody>
            </table>


        </div>
    )
}