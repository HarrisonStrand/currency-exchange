# Week Six/API Calls
##### API calls and requests with Javascript comprehension 11/20/20
### By Harrison Strand
## Description
---This project was designed to display my comprehension of the material in week six of Epicodus executing API calls and responses to give an output of exchange rate from US dollars to other currencies.

## Setup

!!Program Requires Node and webpack as well as your own API_KEY!!

#### View Online
* visit: https://harrisonstrand.github.io/currency-exchange/
#### Open Locally
1. Navigate to https://github.com/HarrisonStrand/currency-exchange 
2. Click on the green 'Code' button and copy the repository HTTPS URL
3. (a) Open your machine terminal and type in the command 'git clone 
https://github.com/HarrisonStrand/currency-exchange' in the directory you would like to clone the repository.
(b) Alternatively, click 'Download Zip' and open the file on your machine
4. Navigate to your terminal and type: NMP INSTALL
5. create your own API key from https://app.exchangerate-api.com and place it in a .env file in the project's main directory
5. Open the index.html file on a live server to view the website, run 'npm run build' in your terminal, or use an IDE to view the code language.

#### Known Bugs
No known bugs.

#### Contact me at: _[harrisonstrand@gmailcom](harrisonstrand@gmail.com)_

## Specs:
| Describe:  | Input | Output |
| :-----------------------------------| :------------- | :------------- |
| Exchange( ) | | |
| It will call the exchange rate API to get a response | Exchange => fetch(`https...`) | response |
| It will contain a static method to use for response in UI | Exchange => getExchange( ) | getExchange( ) |
| get Exchange ( ) | | |
| It will return the fetched API to be used elswhere in the project | static getExchange( ) | return fetch(`https...`) |
| It will throw an error if response is not 200 | getExchange( ) | throw Error |
| DisplayExchange ( ) | | |
| It will take user input for currency type and dollar Amount and give current exchange rate | Swiss franc / $4 USD | $4 in CHF: 3.63 |

## Technologies Used
Visual Studio Code
Git/Github
HTML Script
CSS Styling
Javascript
Node
Webpack
API request/response

## Legal
Copyright 2020 Harrison Strand

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
