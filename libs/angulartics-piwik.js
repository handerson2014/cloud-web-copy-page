/**
 * @license Angulartics v0.17.0
 * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
 * Piwik 2.1.x update contributed by http://github.com/highskillz
 * License: MIT
 */
!function(a){"use strict";a.module("angulartics.piwik",["angulartics"]).config(["$analyticsProvider",function(a){a.settings.trackRelativePath=!0,a.registerPageTrack(function(a){window._paq&&(_paq.push(["setCustomUrl",a]),_paq.push(["trackPageView"]))}),a.registerEventTrack(function(a,b){if(b.value){var c=parseInt(b.value,10);b.value=isNaN(c)?0:c}window._paq&&_paq.push(["trackEvent",b.category,a,b.label,b.value])})}])}(angular);