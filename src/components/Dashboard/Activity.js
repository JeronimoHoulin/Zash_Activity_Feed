import React from 'react';

import './table.css';

import profile_pic from "../Content/MyLemon.jpg"


//Worked with tables before.. might be easyer to map each item and add styles accordingly...
//import Papa, { parse } from 'papaparse';

const parse = require('html-react-parser');


export function Activity() {


    // HARDCODED FOR THE MOMENT... SHOULD ADD A CONNECTOR TO THE LIVE API.
    //got a "None is not defined" error.. will temporarily fix with:

    let None = null;
    let False = false;


    //Also hard coded the "id" of each trade
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

    //console.log(user_data[0])
    //console.log(profile_pic)


      //Set table
    let _html = `
    <tr class="titles">
        <th>Trade</th>
        <th>TokenId</th>
        <th>Time</th>
        <th>Price (ETH)</th>
        <th>Marketplace</th>
    </tr>
    `;


    for(let i=0; i<user_data.length;i++){  

        let stamp = user_data[i].timestamp;
        let DateObj = new Date(stamp * 1000).toISOString();

        let ymd = DateObj.split("T")[0];
        let hms = DateObj.split("T")[1].split(".")[0];

        let alldate = '' + ymd + ' ' +  hms;
        
        _html += `<tr>
            <td style ="width:20%;">${user_data[i].type}</td>
            <td style ="width:25%;">${user_data[i].token_id}</td>
            <td style ="width:25%;">${alldate}</td>
            <td style ="width:25%;">${user_data[i].price}</td>
            <td style ="width:25%;">${user_data[i].marketplace_name}</td>
      </tr>`;


    }





    return (
        <div className='activity'>

            <img src={profile_pic} alt="profile_pic" width="90" className='profile_pic'/>
            
            <h1>Azuki</h1>
            <div className='grey1'>
                <h2 className='address'>0x3943...2103</h2>
            </div>



            <table className="tableActivity">
                <tbody>
                    {parse(_html)}
                </tbody>
            </table>


        </div>
    );
}