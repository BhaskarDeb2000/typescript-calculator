(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();let r="",c="",l=null;function s(){const e=document.getElementById("display");l?e.value=c+" "+l+" "+r:e.value=r||"0"}function m(e){r==="0"?r=e.toString():r+=e.toString(),s()}function y(e){r!==""&&(c!==""&&p(),l=e,c=r,r="",s())}function p(){if(c===""||r===""||l===null)return;const e=parseFloat(c),o=parseFloat(r);if(isNaN(e)||isNaN(o))return;let i=0;switch(l){case"+":i=e+o;break;case"-":i=e-o;break;case"*":i=e*o;break;case"/":if(o===0){alert("Cannot divide by zero");return}i=e/o;break}r=i.toString(),l=null,c="",s()}function g(){r="",c="",l=null,s()}document.querySelectorAll(".number").forEach(e=>{e.addEventListener("click",()=>m(Number(e.textContent)))});document.querySelectorAll(".operator").forEach(e=>{e.addEventListener("click",()=>y(e.textContent))});var d;(d=document.getElementById("clear"))==null||d.addEventListener("click",g);var f;(f=document.getElementById("equal"))==null||f.addEventListener("click",p);s();
