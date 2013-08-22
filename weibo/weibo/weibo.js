cordova.define("com.polyvi.plugins.weibo.weibo", function(require, exports, module) {/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/**
 * 该模块定义新浪微博登陆并获取登陆成功信息(access_token)的相关功能。
 * @module weibo
 * @main weibo
 */

 /**
  * 提供新浪微博授权功能（Android）<br/>
  * 该类不能通过new来创建相应的对象，只能通过navigator.Weibo对象来直接使用该类中定义的方法
  * @class weibo
  * @platform Android
  * @since 3.0.0
  */
var require = cordova.require;
var exec = require('cordova/exec');


function weibo() {}

/**
 * 新浪微博授权，执行成功会返回一系列成功信息，否则触发失败回调得到相应的失败信息。
 * @example
        var clientId = "3968026932";
        var redirectorUrl = "http://www.igo.cn";
        function weiboLogin() {
            navigator.weibo.login(clientId, redirectorUrl, success, fail);
        }
        function success(result) {
            var loginResult = "";
            loginResult = loginResult + "redirect_uri:" + result.redirect_uri + "\n";
            loginResult = loginResult + "access_token:" + result.access_token + "\n";
            loginResult = loginResult + "remind_in:" + result.remind_in + "\n";
            loginResult = loginResult + "expires_in:" + result.expires_in + "\n";
            loginResult = loginResult + "uid:" + result.uid;
            document.getElementById('status').innerText = "success";
            document.getElementById('result').innerText = loginResult;
        }

        function fail(result) {
            document.getElementById('status').innerText = "fail";
            document.getElementById('result').innerText = "fail:" + result;
        }
 * @param {String}   clientId         申请应用时分配的AppKey，参考<a href=http://open.weibo.com/wiki/OAuth2/access_token>access_token</a>,申请地址：http://open.weibo.com/apps/new?sort=mobile.
 * @param {String}   redirect_uri     回调地址，需与注册应用里的回调地址一致。参考参考<a href=http://open.weibo.com/wiki/OAuth2/access_token>redirect_uri</a>。
 * @param {Function} successCallback  成功回调函数
 * @param {Function} successCallback.redirect_uri    回调地址，需与注册应用里的回调地址一致。
 * @param {Function} successCallback.access_token    用于调用access_token，接口获取授权后的access token。  
 * @param {Function} successCallback.remind_in       access_token的生命周期（该参数即将废弃，开发者请使用expires_in）。  
 * @param {Function} successCallback.expires_in      access_token的生命周期，单位是秒数。  
 * @param {Function} successCallback.uid             当前授权用户的UID。  
 * @param {Function} errorCallback    失败回调函数
 * @param {Function} errorCallback.errorMsg   失败回调错误信息。
 */
weibo.prototype.login = function(clientId, redirect_uri, successCallback, errorCallback){
    exec(successCallback, errorCallback, "weibo", "login", [clientId, redirect_uri]);
};

module.exports = new weibo();
});