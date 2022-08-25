# Step by Step React Redux - Change Mode
1. Create Project
2. Install package / dependecies yang dibutuhkan :
    ## Core
    1. redux
    2. react-redux
    3. redux-devtools-extension
    ## Additional 
    4. react-router-dom@6

    &nbsp;   
    Command install : 
    \
    `npm install redux react-redux redux-devtools-extension`

3. Membuat folder dengan **store** didalam folder dibuat lagi 2 folder dan 1 file diantaranya :
    1. Folder **actions**
    2. Folder **reducers**
    3. File `store.js`
4. Menambahkan 1 file core dengan `index.js` didalam folder **actions**
5. Pada folder **actions** tambahkan action interface yang dibutuhkan
6. Menuliskan code pada action interface yang dibutuhkan
7. Menambahkan 1 file core dengan `index.js` didalam filder **reducers**, lalu import core method **combineReducers**
8. Pada folder **reducers** tambahkan file reducer sesuai dengan kebutuhan
9. Pada file `store.js` import core method **createStore**
10. Pada file `index.js` yang terdapat di root project **src**