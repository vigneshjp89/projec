var express = require('express');
var router = express.Router();
var content="<div id='crmWebToEntityForm' style='width:600px;margin:auto;border: 1px solid #e1e1e1;padding: 15px;background-color:#fff;color:#333;'>\n<META HTTP-EQUIV ='content-type' CONTENT='text/html;charset=UTF-8'><form action='https://bigin.zoho.com/crm/WebToContactForm' name='CMIGNITEWebToContacts' method='POST' enctype='multipart/form-data' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory()' accept-charset='UTF-8'>
<!-- Do not remove this code. -->
    <input type='text' style='display:none;' name='xnQsjsdp' value='033c9b31998d5a5232a3ba986155a819f1c8ef472469f292303ce7bade4c71f9'/>
    <input type='hidden' name='zc_gad' id='zc_gad' value=''/>
    <input type='text' style='display:none;' name='xmIwtLD' value='af8f86f15049b91a332ac0e414899afe048670718f5ec51c1da2cc48b32e702c'/>
    <input type='text' style='display:none;' name='actionType' value='Q29udGFjdHM='/>
    <input type='text' style='display:none;' name='returnURL' value='https://vignesh07.herokuapp.com/testForm' />
    <div style="font-size: 21px; margin-bottom: 15px;word-break: break-word;">TEst Form</div>
    <table style="border:0;border-collapse:collapse;width: 100%;background-color: #fff;color:#333;font-family:robotoregular;text-align:left; font-size: 15;" colspacing="5">
         <tr>
              <td width="25%" style="vertical-align:top;padding: 15px 20px 0px 10px;width: 25%; border:0;">Last Name
                   <span style="color: #bb0707;width: 10px;height: 10px;z-index: 1;font-size: 14px;text-transform: inherit;position: relative;">*</span>
              </td>
              <td width="75%" style="vertical-align:top; text-align:left;word-break: break-word;padding: 10px; border:0;">
                   <input name="Last Name" type="text" maxlength="80" value="" placeholder="" style=" border: 1px solid #e2e0df;padding: 10px 15px;max-width: 480px;border-radius:3px;width: 60%;"/>
              </td>
         </tr>
          <tr><td style='border:0;'></td><td style='text-align:left; border:0; padding-top:15px;font-size:13px;'>
              <input onclick='disableSubmitwhileReset()' type='reset' style='margin-right: 10px;font-size:13px;border-radius: 3px;vertical-align: middle;background-color: #fff;border-color: #222;padding: 8px 15px;color: #3c3c3c;border: solid 1px #d4d3d2;display: inline-block;width: auto;' value='Reset' />
              <input style='opacity:; font-size:13px;color: #fff;border-radius: 3px;vertical-align: middle;background-color: #1980d8;border-color: #1980d8;padding: 8px 15px;display: inline-block;width: auto;'  id='formsubmit' type='submit' value='Submit' />
         </td></tr>
    </table>
    <script>
     var mndFileds=new Array('Last_Name');
     var fldLangVal=new Array('Last Name');
     var name='';
     var email=''; 
    function disableSubmitwhileReset(){var e=document.getElementById("formsubmit");null!==document.getElementById("privacyTool")||null!==document.getElementById("consentTool")?(e.disabled=!0,e.style.opacity="0.5;"):e.removeAttribute("disabled")}
    function checkMandatory(){var e,t=mndFileds.length;for(e=0;e<t;e++){var i=document.forms.CMIGNITEWebToContacts[mndFileds[e]];if(i){if(0===i.value.replace(/^\s+|\s+$/g,"").length)return"file"===i.type?(alert("Please select a file to upload."),i.focus(),!1):(alert(fldLangVal[e]+" cannot be empty."),i.focus(),!1);if("SELECT"===i.nodeName){if("-None-"===i.options[i.selectedIndex].value)return alert(fldLangVal[e]+" cannot be none."),i.focus(),!1}else if("checkbox"===i.type&&!1===i.checked)return alert("Please accept  "+fldLangVal[e]),i.focus(),!1;try{"Last Name"===i.name&&(name=i.value)}catch(e){}}}return validateFileUpload()}
    function validateFileUpload(){var e=document.getElementById("theFile"),t=0;if(e){if(e.files.length>3)return alert("You can upload a maximum of three files at a time."),!1;if("files"in e){var i=e.files.length;if(0!==i){for(var n=0;n<i;n++){var r=e.files[n];"size"in r&&(t+=r.size)}if(t>20971520)return alert("Total file(s) size should not exceed 20MB."),!1}}}}</script>
</form>
</div>"
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' ,testCon:""});
});



module.exports = router;