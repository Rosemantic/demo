/* animations.js — GSAP v3.12 Lightweight */
gsap.registerPlugin(ScrollTrigger);
var _ok=false;
setTimeout(function(){if(!_ok)document.querySelectorAll('[class*=anim-]').forEach(function(e){e.style.opacity='1';e.style.transform='none';e.style.visibility='visible'});},2000);

function initAnimations(){
_ok=true;

/* Loader */
var l=document.querySelector('.loader');var lf=document.querySelector('.loader-bar-fill');
if(l&&lf){gsap.to(lf,{width:'100%',duration:.7,ease:'power2.inOut',onComplete:function(){gsap.to(l,{opacity:0,duration:.4,onComplete:function(){l.classList.add('hide')}})}})}else{if(l)l.classList.add('hide')}

/* Hero */
var hl=document.querySelectorAll('.hero-line');
if(hl.length){gsap.set(hl,{y:'110%',opacity:0});gsap.to(hl,{y:0,opacity:1,duration:1,ease:'power4.out',stagger:.12,delay:.5})}

/* Fade-up elements */
document.querySelectorAll('.anim-fade').forEach(function(e,i){gsap.set(e,{opacity:0,y:30});gsap.to(e,{opacity:1,y:0,duration:.7,ease:'power3.out',delay:.3+i*.06,scrollTrigger:{trigger:e,start:'top 88%',toggleActions:'play none none none'}})});

/* Stagger children */
document.querySelectorAll('.anim-stagger').forEach(function(c){var ch=Array.from(c.children);if(!ch.length)return;gsap.set(ch,{opacity:0,y:40});gsap.to(ch,{opacity:1,y:0,duration:.65,stagger:.08,ease:'power3.out',scrollTrigger:{trigger:c,start:'top 88%',toggleActions:'play none none none'}})});

/* Scale-in */
document.querySelectorAll('.anim-scale').forEach(function(e){gsap.set(e,{opacity:0,scale:.92});gsap.to(e,{opacity:1,scale:1,duration:.7,ease:'power3.out',scrollTrigger:{trigger:e,start:'top 90%',toggleActions:'play none none none'}})});

/* Counter */
document.querySelectorAll('[data-count]').forEach(function(e){var t=parseInt(e.dataset.count)||0;var o={v:0};gsap.to(o,{v:t,duration:2,ease:'power2.out',scrollTrigger:{trigger:e,start:'top 85%',toggleActions:'play none none none'},onUpdate:function(){e.textContent=Math.round(o.v)}})});

/* Heat bars */
document.querySelectorAll('[data-heat]').forEach(function(e){var w=e.dataset.heat+'%';gsap.set(e,{width:'0%'});gsap.to(e,{width:w,duration:1.3,ease:'power2.out',scrollTrigger:{trigger:e,start:'top 88%',toggleActions:'play none none none'}})});

/* Nav scroll */
var n=document.querySelector('.nav');if(n){ScrollTrigger.create({start:80,onEnter:function(){n.classList.add('scrolled')},onLeaveBack:function(){n.classList.remove('scrolled')}})}

/* Back to top */
var bt=document.querySelector('.back-top');if(bt){window.addEventListener('scroll',function(){bt.classList.toggle('show',window.scrollY>500)},{passive:true});bt.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})})}

/* Mobile nav */
var tg=document.querySelector('.nav-toggle');var nl=document.querySelector('.nav-links');if(tg&&nl){tg.addEventListener('click',function(){tg.classList.toggle('open');nl.classList.toggle('open')});nl.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){tg.classList.remove('open');nl.classList.remove('open')})})}
}

document.addEventListener('DOMContentLoaded',initAnimations);
