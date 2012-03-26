// Copyright 2011 The Closure Library Authors. All Rights Reserved
// Copyright 2012 Oliver Wong. All Rights Reserved
//
// Adapted from Google Closure:
// http://code.google.com/p/closure-library/source/browse/trunk/closure/goog/i18n/
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
 
(function(root) {

    /**
     * Number formatting symbols for locale af.
     * @enum {string}
     */
    NumberFormat.locale.af = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '\u00A0',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '\u00A4#,##0.00',
      DEF_CURRENCY_CODE: 'ZAR'
    };


    /**
     * Number formatting symbols for locale af_ZA.
     * @enum {string}
     */
    NumberFormat.locale.af_ZA = NumberFormat.locale.af;


    /**
     * Number formatting symbols for locale am.
     * @enum {string}
     */
    NumberFormat.locale.am = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '\u00A4#,##0.00;(\u00A4#,##0.00)',
      DEF_CURRENCY_CODE: 'ETB'
    };


    /**
     * Number formatting symbols for locale am_ET.
     * @enum {string}
     */
    NumberFormat.locale.am_ET = NumberFormat.locale.am;


    /**
     * Number formatting symbols for locale ar.
     * @enum {string}
     */
    NumberFormat.locale.ar = {
      DECIMAL_SEP: '\u066B',
      GROUP_SEP: '\u066C',
      PERCENT: '\u066A',
      ZERO_DIGIT: '\u0660',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: '\u0627\u0633',
      PERMILL: '\u0609',
      INFINITY: '\u221E',
      NAN: '\u0644\u064A\u0633 \u0631\u0642\u0645',
      DECIMAL_PATTERN: '#,##0.###;#,##0.###-',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '\u00A4\u00A0#,##0.00;\u00A4\u00A0#,##0.00-',
      DEF_CURRENCY_CODE: 'EGP'
    };


    /**
     * Number formatting symbols for locale ar_EG.
     * @enum {string}
     */
    NumberFormat.locale.ar_EG = NumberFormat.locale.ar;


    /**
     * Number formatting symbols for locale bg.
     * @enum {string}
     */
    NumberFormat.locale.bg = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '\u00A0',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'BGN'
    };


    /**
     * Number formatting symbols for locale bg_BG.
     * @enum {string}
     */
    NumberFormat.locale.bg_BG = NumberFormat.locale.bg;


    /**
     * Number formatting symbols for locale bn.
     * @enum {string}
     */
    NumberFormat.locale.bn = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '\u09e6',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: '\u09B8\u0982\u0996\u09CD\u09AF\u09BE \u09A8\u09BE',
      DECIMAL_PATTERN: '#,##,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##,##0%',
      CURRENCY_PATTERN: '#,##,##0.00\u00A4;(#,##,##0.00\u00A4)',
      DEF_CURRENCY_CODE: 'BDT'
    };


    /**
     * Number formatting symbols for locale bn_BD.
     * @enum {string}
     */
    NumberFormat.locale.bn_BD = NumberFormat.locale.bn;


    /**
     * Number formatting symbols for locale ca.
     * @enum {string}
     */
    NumberFormat.locale.ca = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '.',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'EUR'
    };


    /**
     * Number formatting symbols for locale ca_ES.
     * @enum {string}
     */
    NumberFormat.locale.ca_ES = NumberFormat.locale.ca;


    /**
     * Number formatting symbols for locale cs.
     * @enum {string}
     */
    NumberFormat.locale.cs = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '\u00A0',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0\u00A0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'CZK'
    };


    /**
     * Number formatting symbols for locale cs_CZ.
     * @enum {string}
     */
    NumberFormat.locale.cs_CZ = NumberFormat.locale.cs;


    /**
     * Number formatting symbols for locale da.
     * @enum {string}
     */
    NumberFormat.locale.da = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '.',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0\u00A0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'DKK'
    };


    /**
     * Number formatting symbols for locale da_DK.
     * @enum {string}
     */
    NumberFormat.locale.da_DK = NumberFormat.locale.da;


    /**
     * Number formatting symbols for locale de.
     * @enum {string}
     */
    NumberFormat.locale.de = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '.',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0\u00A0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'EUR'
    };


    /**
     * Number formatting symbols for locale de_AT.
     * @enum {string}
     */
    NumberFormat.locale.de_AT = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '.',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0\u00A0%',
      CURRENCY_PATTERN: '\u00A4\u00A0#,##0.00',
      DEF_CURRENCY_CODE: 'EUR'
    };


    /**
     * Number formatting symbols for locale de_BE.
     * @enum {string}
     */
    NumberFormat.locale.de_BE = NumberFormat.locale.de;


    /**
     * Number formatting symbols for locale de_CH.
     * @enum {string}
     */
    NumberFormat.locale.de_CH = {
      DECIMAL_SEP: '.',
      GROUP_SEP: '\'',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0\u00A0%',
      CURRENCY_PATTERN: '\u00A4\u00A0#,##0.00;\u00A4-#,##0.00',
      DEF_CURRENCY_CODE: 'CHF'
    };


    /**
     * Number formatting symbols for locale de_DE.
     * @enum {string}
     */
    NumberFormat.locale.de_DE = NumberFormat.locale.de;


    /**
     * Number formatting symbols for locale de_LU.
     * @enum {string}
     */
    NumberFormat.locale.de_LU = NumberFormat.locale.de;


    /**
     * Number formatting symbols for locale el.
     * @enum {string}
     */
    NumberFormat.locale.el = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '.',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'e',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'EUR'
    };


    /**
     * Number formatting symbols for locale el_GR.
     * @enum {string}
     */
    NumberFormat.locale.el_GR = NumberFormat.locale.el;


    /**
     * Number formatting symbols for locale el_POLYTON.
     * @enum {string}
     */
    NumberFormat.locale.el_POLYTON = NumberFormat.locale.el;


    /**
     * Number formatting symbols for locale en_AS.
     * @enum {string}
     */
    NumberFormat.locale.en_AS = NumberFormat.locale.en;


    /**
     * Number formatting symbols for locale en_AU.
     * @enum {string}
     */
    NumberFormat.locale.en_AU = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '\u00A4#,##0.00',
      DEF_CURRENCY_CODE: 'AUD'
    };


    /**
     * Number formatting symbols for locale en_Dsrt.
     * @enum {string}
     */
    NumberFormat.locale.en_Dsrt = NumberFormat.locale.en;


    /**
     * Number formatting symbols for locale en_Dsrt_US.
     * @enum {string}
     */
    NumberFormat.locale.en_Dsrt_US = NumberFormat.locale.en;


    /**
     * Number formatting symbols for locale en_GB.
     * @enum {string}
     */
    NumberFormat.locale.en_GB = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '\u00A4#,##0.00',
      DEF_CURRENCY_CODE: 'GBP'
    };


    /**
     * Number formatting symbols for locale en_GU.
     * @enum {string}
     */
    NumberFormat.locale.en_GU = NumberFormat.locale.en;


    /**
     * Number formatting symbols for locale en_IE.
     * @enum {string}
     */
    NumberFormat.locale.en_IE = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '\u00A4#,##0.00',
      DEF_CURRENCY_CODE: 'EUR'
    };


    /**
     * Number formatting symbols for locale en_IN.
     * @enum {string}
     */
    NumberFormat.locale.en_IN = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##,##0%',
      CURRENCY_PATTERN: '\u00A4\u00A0#,##,##0.00',
      DEF_CURRENCY_CODE: 'INR'
    };


    /**
     * Number formatting symbols for locale en_MH.
     * @enum {string}
     */
    NumberFormat.locale.en_MH = NumberFormat.locale.en;


    /**
     * Number formatting symbols for locale en_MP.
     * @enum {string}
     */
    NumberFormat.locale.en_MP = NumberFormat.locale.en;


    /**
     * Number formatting symbols for locale en_SG.
     * @enum {string}
     */
    NumberFormat.locale.en_SG = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '\u00A4#,##0.00;(\u00A4#,##0.00)',
      DEF_CURRENCY_CODE: 'SGD'
    };


    /**
     * Number formatting symbols for locale en_UM.
     * @enum {string}
     */
    NumberFormat.locale.en_UM = NumberFormat.locale.en;


    /**
     * Number formatting symbols for locale en_US.
     * @enum {string}
     */
    NumberFormat.locale.en_US = NumberFormat.locale.en;


    /**
     * Number formatting symbols for locale en_VI.
     * @enum {string}
     */
    NumberFormat.locale.en_VI = NumberFormat.locale.en;


    /**
     * Number formatting symbols for locale en_ZA.
     * @enum {string}
     */
    NumberFormat.locale.en_ZA = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '\u00A0',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '\u00A4#,##0.00;(\u00A4#,##0.00)',
      DEF_CURRENCY_CODE: 'ZAR'
    };


    /**
     * Number formatting symbols for locale es.
     * @enum {string}
     */
    NumberFormat.locale.es = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '.',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'EUR'
    };


    /**
     * Number formatting symbols for locale es_419.
     * @enum {string}
     */
    NumberFormat.locale.es_419 = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '\u00A4#,##0.00',
      DEF_CURRENCY_CODE: 'MXN'
    };


    /**
     * Number formatting symbols for locale es_ES.
     * @enum {string}
     */
    NumberFormat.locale.es_ES = NumberFormat.locale.es;


    /**
     * Number formatting symbols for locale et.
     * @enum {string}
     */
    NumberFormat.locale.et = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '\u00A0',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'EUR'
    };


    /**
     * Number formatting symbols for locale et_EE.
     * @enum {string}
     */
    NumberFormat.locale.et_EE = NumberFormat.locale.et;


    /**
     * Number formatting symbols for locale eu.
     * @enum {string}
     */
    NumberFormat.locale.eu = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '.',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'EUR'
    };


    /**
     * Number formatting symbols for locale eu_ES.
     * @enum {string}
     */
    NumberFormat.locale.eu_ES = NumberFormat.locale.eu;


    /**
     * Number formatting symbols for locale fa.
     * @enum {string}
     */
    NumberFormat.locale.fa = {
      DECIMAL_SEP: '\u066B',
      GROUP_SEP: '\u066C',
      PERCENT: '\u066A',
      ZERO_DIGIT: '\u06F0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: '\u00D7\u06F1\u06F0^',
      PERMILL: '\u0609',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4;\u2212#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'IRR'
    };


    /**
     * Number formatting symbols for locale fa_IR.
     * @enum {string}
     */
    NumberFormat.locale.fa_IR = NumberFormat.locale.fa;


    /**
     * Number formatting symbols for locale fi.
     * @enum {string}
     */
    NumberFormat.locale.fi = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '\u00A0',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'ep\u00E4luku',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0\u00A0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'EUR'
    };


    /**
     * Number formatting symbols for locale fi_FI.
     * @enum {string}
     */
    NumberFormat.locale.fi_FI = NumberFormat.locale.fi;


    /**
     * Number formatting symbols for locale fil.
     * @enum {string}
     */
    NumberFormat.locale.fil = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '\u00A4\u00A0#,##0.00',
      DEF_CURRENCY_CODE: 'PHP'
    };


    /**
     * Number formatting symbols for locale fil_PH.
     * @enum {string}
     */
    NumberFormat.locale.fil_PH = NumberFormat.locale.fil;


    /**
     * Number formatting symbols for locale fr.
     * @enum {string}
     */
    NumberFormat.locale.fr = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '\u00A0',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0\u00A0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'EUR'
    };


    /**
     * Number formatting symbols for locale fr_BL.
     * @enum {string}
     */
    NumberFormat.locale.fr_BL = NumberFormat.locale.fr;


    /**
     * Number formatting symbols for locale fr_CA.
     * @enum {string}
     */
    NumberFormat.locale.fr_CA = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '\u00A0',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0\u00A0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4;(#,##0.00\u00A0\u00A4)',
      DEF_CURRENCY_CODE: 'CAD'
    };


    /**
     * Number formatting symbols for locale fr_FR.
     * @enum {string}
     */
    NumberFormat.locale.fr_FR = NumberFormat.locale.fr;


    /**
     * Number formatting symbols for locale fr_GF.
     * @enum {string}
     */
    NumberFormat.locale.fr_GF = NumberFormat.locale.fr;


    /**
     * Number formatting symbols for locale fr_GP.
     * @enum {string}
     */
    NumberFormat.locale.fr_GP = NumberFormat.locale.fr;


    /**
     * Number formatting symbols for locale fr_MC.
     * @enum {string}
     */
    NumberFormat.locale.fr_MC = NumberFormat.locale.fr;


    /**
     * Number formatting symbols for locale fr_MF.
     * @enum {string}
     */
    NumberFormat.locale.fr_MF = NumberFormat.locale.fr;


    /**
     * Number formatting symbols for locale fr_MQ.
     * @enum {string}
     */
    NumberFormat.locale.fr_MQ = NumberFormat.locale.fr;


    /**
     * Number formatting symbols for locale fr_RE.
     * @enum {string}
     */
    NumberFormat.locale.fr_RE = NumberFormat.locale.fr;


    /**
     * Number formatting symbols for locale fr_YT.
     * @enum {string}
     */
    NumberFormat.locale.fr_YT = NumberFormat.locale.fr;


    /**
     * Number formatting symbols for locale gl.
     * @enum {string}
     */
    NumberFormat.locale.gl = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '.',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'EUR'
    };


    /**
     * Number formatting symbols for locale gl_ES.
     * @enum {string}
     */
    NumberFormat.locale.gl_ES = NumberFormat.locale.gl;


    /**
     * Number formatting symbols for locale gsw.
     * @enum {string}
     */
    NumberFormat.locale.gsw = {
      DECIMAL_SEP: '.',
      GROUP_SEP: '\u2019',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '\u2212',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0\u00A0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'CHF'
    };


    /**
     * Number formatting symbols for locale gsw_CH.
     * @enum {string}
     */
    NumberFormat.locale.gsw_CH = NumberFormat.locale.gsw;


    /**
     * Number formatting symbols for locale gu.
     * @enum {string}
     */
    NumberFormat.locale.gu = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: '\u0AAA\u0AC2\u0AB0\u0ACD\u0AB5',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: '\u0AB8\u0A82\u0A96\u0ACD\u0AAF\u0ABE \u0AA8\u0AA5\u0AC0\u0A82',
      DECIMAL_PATTERN: '#,##,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##,##0%',
      CURRENCY_PATTERN: '\u00A4\u00A0#,##,##0.00',
      DEF_CURRENCY_CODE: 'INR'
    };


    /**
     * Number formatting symbols for locale gu_IN.
     * @enum {string}
     */
    NumberFormat.locale.gu_IN = NumberFormat.locale.gu;


    /**
     * Number formatting symbols for locale he.
     * @enum {string}
     */
    NumberFormat.locale.he = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'ILS'
    };


    /**
     * Number formatting symbols for locale he_IL.
     * @enum {string}
     */
    NumberFormat.locale.he_IL = NumberFormat.locale.he;


    /**
     * Number formatting symbols for locale hi.
     * @enum {string}
     */
    NumberFormat.locale.hi = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##,##0%',
      CURRENCY_PATTERN: '\u00A4\u00A0#,##,##0.00',
      DEF_CURRENCY_CODE: 'INR'
    };


    /**
     * Number formatting symbols for locale hi_IN.
     * @enum {string}
     */
    NumberFormat.locale.hi_IN = NumberFormat.locale.hi;


    /**
     * Number formatting symbols for locale hr.
     * @enum {string}
     */
    NumberFormat.locale.hr = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '.',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'HRK'
    };


    /**
     * Number formatting symbols for locale hr_HR.
     * @enum {string}
     */
    NumberFormat.locale.hr_HR = NumberFormat.locale.hr;


    /**
     * Number formatting symbols for locale hu.
     * @enum {string}
     */
    NumberFormat.locale.hu = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '\u00A0',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'HUF'
    };


    /**
     * Number formatting symbols for locale hu_HU.
     * @enum {string}
     */
    NumberFormat.locale.hu_HU = NumberFormat.locale.hu;


    /**
     * Number formatting symbols for locale id.
     * @enum {string}
     */
    NumberFormat.locale.id = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '.',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '\u00A4#,##0.00',
      DEF_CURRENCY_CODE: 'IDR'
    };


    /**
     * Number formatting symbols for locale id_ID.
     * @enum {string}
     */
    NumberFormat.locale.id_ID = NumberFormat.locale.id;


    /**
     * Number formatting symbols for locale in.
     * @enum {string}
     */
    NumberFormat.locale.in = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '.',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '\u00A4#,##0.00',
      DEF_CURRENCY_CODE: 'IDR'
    };


    /**
     * Number formatting symbols for locale is.
     * @enum {string}
     */
    NumberFormat.locale.is = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '.',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '\u2212',
      EXP_SYMBOL: '\u00D710^',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'EiTa',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'ISK'
    };


    /**
     * Number formatting symbols for locale is_IS.
     * @enum {string}
     */
    NumberFormat.locale.is_IS = NumberFormat.locale.is;


    /**
     * Number formatting symbols for locale it.
     * @enum {string}
     */
    NumberFormat.locale.it = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '.',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '\u00A4\u00A0#,##0.00',
      DEF_CURRENCY_CODE: 'EUR'
    };


    /**
     * Number formatting symbols for locale it_IT.
     * @enum {string}
     */
    NumberFormat.locale.it_IT = NumberFormat.locale.it;


    /**
     * Number formatting symbols for locale iw.
     * @enum {string}
     */
    NumberFormat.locale.iw = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'ILS'
    };


    /**
     * Number formatting symbols for locale ja.
     * @enum {string}
     */
    NumberFormat.locale.ja = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN\uFF08\u975E\u6570\uFF09',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '\u00A4#,##0.00',
      DEF_CURRENCY_CODE: 'JPY'
    };


    /**
     * Number formatting symbols for locale ja_JP.
     * @enum {string}
     */
    NumberFormat.locale.ja_JP = NumberFormat.locale.ja;


    /**
     * Number formatting symbols for locale kn.
     * @enum {string}
     */
    NumberFormat.locale.kn = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: '\u0CAA\u0CC2\u0CB0\u0CCD\u0CB5',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: '\u0CB8\u0C82\u0C96\u0CCD\u0CAF\u0CC6\u0CAF\u0CB2\u0CCD\u0CB2',
      DECIMAL_PATTERN: '#,##,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##,##0%',
      CURRENCY_PATTERN: '\u00A4\u00A0#,##,##0.00',
      DEF_CURRENCY_CODE: 'INR'
    };


    /**
     * Number formatting symbols for locale kn_IN.
     * @enum {string}
     */
    NumberFormat.locale.kn_IN = NumberFormat.locale.kn;


    /**
     * Number formatting symbols for locale ko.
     * @enum {string}
     */
    NumberFormat.locale.ko = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '\u00A4#,##0.00',
      DEF_CURRENCY_CODE: 'KRW'
    };


    /**
     * Number formatting symbols for locale ko_KR.
     * @enum {string}
     */
    NumberFormat.locale.ko_KR = NumberFormat.locale.ko;


    /**
     * Number formatting symbols for locale ln.
     * @enum {string}
     */
    NumberFormat.locale.ln = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '.',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'CDF'
    };


    /**
     * Number formatting symbols for locale ln_CD.
     * @enum {string}
     */
    NumberFormat.locale.ln_CD = NumberFormat.locale.ln;


    /**
     * Number formatting symbols for locale lt.
     * @enum {string}
     */
    NumberFormat.locale.lt = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '\u2212',
      EXP_SYMBOL: '\u00D710^',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: '\u00A4\u00A4\u00A4',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0\u00A0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'LTL'
    };


    /**
     * Number formatting symbols for locale lt_LT.
     * @enum {string}
     */
    NumberFormat.locale.lt_LT = NumberFormat.locale.lt;


    /**
     * Number formatting symbols for locale lv.
     * @enum {string}
     */
    NumberFormat.locale.lv = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '\u00A0',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '\u2212',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'nav\u00A0skaitlis',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'LVL'
    };


    /**
     * Number formatting symbols for locale lv_LV.
     * @enum {string}
     */
    NumberFormat.locale.lv_LV = NumberFormat.locale.lv;


    /**
     * Number formatting symbols for locale ml.
     * @enum {string}
     */
    NumberFormat.locale.ml = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##,##0%',
      CURRENCY_PATTERN: '#,##,##0.00\u00A4',
      DEF_CURRENCY_CODE: 'INR'
    };


    /**
     * Number formatting symbols for locale ml_IN.
     * @enum {string}
     */
    NumberFormat.locale.ml_IN = NumberFormat.locale.ml;


    /**
     * Number formatting symbols for locale mr.
     * @enum {string}
     */
    NumberFormat.locale.mr = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: '\u092A\u0942',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: '\u0928\u093E\u0928',
      DECIMAL_PATTERN: '#,##,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##,##0%',
      CURRENCY_PATTERN: '\u00A4\u00A0#,##,##0.00',
      DEF_CURRENCY_CODE: 'INR'
    };


    /**
     * Number formatting symbols for locale mr_IN.
     * @enum {string}
     */
    NumberFormat.locale.mr_IN = NumberFormat.locale.mr;


    /**
     * Number formatting symbols for locale ms.
     * @enum {string}
     */
    NumberFormat.locale.ms = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '\u00A4#,##0.00;(\u00A4#,##0.00)',
      DEF_CURRENCY_CODE: 'MYR'
    };


    /**
     * Number formatting symbols for locale ms_MY.
     * @enum {string}
     */
    NumberFormat.locale.ms_MY = NumberFormat.locale.ms;


    /**
     * Number formatting symbols for locale mt.
     * @enum {string}
     */
    NumberFormat.locale.mt = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '\u00A4#,##0.00',
      DEF_CURRENCY_CODE: 'MTL'
    };


    /**
     * Number formatting symbols for locale mt_MT.
     * @enum {string}
     */
    NumberFormat.locale.mt_MT = NumberFormat.locale.mt;


    /**
     * Number formatting symbols for locale nl.
     * @enum {string}
     */
    NumberFormat.locale.nl = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '.',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '\u00A4\u00A0#,##0.00;\u00A4\u00A0#,##0.00-',
      DEF_CURRENCY_CODE: 'EUR'
    };


    /**
     * Number formatting symbols for locale nl_NL.
     * @enum {string}
     */
    NumberFormat.locale.nl_NL = NumberFormat.locale.nl;


    /**
     * Number formatting symbols for locale no.
     * @enum {string}
     */
    NumberFormat.locale.no = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '\u00A0',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0\u00A0%',
      CURRENCY_PATTERN: '\u00A4\u00A0#,##0.00',
      DEF_CURRENCY_CODE: 'NOK'
    };


    /**
     * Number formatting symbols for locale or.
     * @enum {string}
     */
    NumberFormat.locale.or = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##,##0%',
      CURRENCY_PATTERN: '\u00A4\u00A0#,##,##0.00',
      DEF_CURRENCY_CODE: 'INR'
    };


    /**
     * Number formatting symbols for locale or_IN.
     * @enum {string}
     */
    NumberFormat.locale.or_IN = NumberFormat.locale.or;


    /**
     * Number formatting symbols for locale pl.
     * @enum {string}
     */
    NumberFormat.locale.pl = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '\u00A0',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'PLN'
    };


    /**
     * Number formatting symbols for locale pl_PL.
     * @enum {string}
     */
    NumberFormat.locale.pl_PL = NumberFormat.locale.pl;


    /**
     * Number formatting symbols for locale pt.
     * @enum {string}
     */
    NumberFormat.locale.pt = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '.',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '\u00A4#,##0.00;(\u00A4#,##0.00)',
      DEF_CURRENCY_CODE: 'BRL'
    };


    /**
     * Number formatting symbols for locale pt_BR.
     * @enum {string}
     */
    NumberFormat.locale.pt_BR = NumberFormat.locale.pt;


    /**
     * Number formatting symbols for locale pt_PT.
     * @enum {string}
     */
    NumberFormat.locale.pt_PT = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '\u00A0',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'EUR'
    };


    /**
     * Number formatting symbols for locale ro.
     * @enum {string}
     */
    NumberFormat.locale.ro = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '.',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'RON'
    };


    /**
     * Number formatting symbols for locale ro_RO.
     * @enum {string}
     */
    NumberFormat.locale.ro_RO = NumberFormat.locale.ro;


    /**
     * Number formatting symbols for locale ru.
     * @enum {string}
     */
    NumberFormat.locale.ru = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '\u00A0',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: '\u043D\u0435 \u0447\u0438\u0441\u043B\u043E',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0\u00A0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'RUB'
    };


    /**
     * Number formatting symbols for locale ru_RU.
     * @enum {string}
     */
    NumberFormat.locale.ru_RU = NumberFormat.locale.ru;


    /**
     * Number formatting symbols for locale sk.
     * @enum {string}
     */
    NumberFormat.locale.sk = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '\u00A0',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0\u00A0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'SKK'
    };


    /**
     * Number formatting symbols for locale sk_SK.
     * @enum {string}
     */
    NumberFormat.locale.sk_SK = NumberFormat.locale.sk;


    /**
     * Number formatting symbols for locale sl.
     * @enum {string}
     */
    NumberFormat.locale.sl = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '.',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'e',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'EUR'
    };


    /**
     * Number formatting symbols for locale sl_SI.
     * @enum {string}
     */
    NumberFormat.locale.sl_SI = NumberFormat.locale.sl;


    /**
     * Number formatting symbols for locale sq.
     * @enum {string}
     */
    NumberFormat.locale.sq = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '.',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '\u00A4#,##0.00',
      DEF_CURRENCY_CODE: 'ALL'
    };


    /**
     * Number formatting symbols for locale sq_AL.
     * @enum {string}
     */
    NumberFormat.locale.sq_AL = NumberFormat.locale.sq;


    /**
     * Number formatting symbols for locale sr.
     * @enum {string}
     */
    NumberFormat.locale.sr = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '.',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'RSD'
    };


    /**
     * Number formatting symbols for locale sr_Cyrl_RS.
     * @enum {string}
     */
    NumberFormat.locale.sr_Cyrl_RS = NumberFormat.locale.sr;


    /**
     * Number formatting symbols for locale sr_Latn_RS.
     * @enum {string}
     */
    NumberFormat.locale.sr_Latn_RS = NumberFormat.locale.sr;


    /**
     * Number formatting symbols for locale sv.
     * @enum {string}
     */
    NumberFormat.locale.sv = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '\u00A0',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '\u2212',
      EXP_SYMBOL: '\u00D710^',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: '\u00A4\u00A4\u00A4',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0\u00A0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'SEK'
    };


    /**
     * Number formatting symbols for locale sv_SE.
     * @enum {string}
     */
    NumberFormat.locale.sv_SE = NumberFormat.locale.sv;


    /**
     * Number formatting symbols for locale sw.
     * @enum {string}
     */
    NumberFormat.locale.sw = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'TZS'
    };


    /**
     * Number formatting symbols for locale sw_TZ.
     * @enum {string}
     */
    NumberFormat.locale.sw_TZ = NumberFormat.locale.sw;


    /**
     * Number formatting symbols for locale ta.
     * @enum {string}
     */
    NumberFormat.locale.ta = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: '\u0B8E\u0BA3\u0BCD \u0B87\u0BB2\u0BCD\u0BB2\u0BC8',
      DECIMAL_PATTERN: '#,##,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##,##0%',
      CURRENCY_PATTERN: '\u00A4\u00A0#,##,##0.00',
      DEF_CURRENCY_CODE: 'INR'
    };


    /**
     * Number formatting symbols for locale ta_IN.
     * @enum {string}
     */
    NumberFormat.locale.ta_IN = NumberFormat.locale.ta;


    /**
     * Number formatting symbols for locale te.
     * @enum {string}
     */
    NumberFormat.locale.te = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: '\u0C24\u0C42',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##,##0%',
      CURRENCY_PATTERN: '\u00A4\u00A0#,##,##0.00',
      DEF_CURRENCY_CODE: 'INR'
    };


    /**
     * Number formatting symbols for locale te_IN.
     * @enum {string}
     */
    NumberFormat.locale.te_IN = NumberFormat.locale.te;


    /**
     * Number formatting symbols for locale th.
     * @enum {string}
     */
    NumberFormat.locale.th = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '\u00A4#,##0.00;\u00A4-#,##0.00',
      DEF_CURRENCY_CODE: 'THB'
    };


    /**
     * Number formatting symbols for locale th_TH.
     * @enum {string}
     */
    NumberFormat.locale.th_TH = NumberFormat.locale.th;


    /**
     * Number formatting symbols for locale tl.
     * @enum {string}
     */
    NumberFormat.locale.tl = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '\u00A4\u00A0#,##0.00',
      DEF_CURRENCY_CODE: 'PHP'
    };


    /**
     * Number formatting symbols for locale tr.
     * @enum {string}
     */
    NumberFormat.locale.tr = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '.',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '%#,##0',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'TRY'
    };


    /**
     * Number formatting symbols for locale tr_TR.
     * @enum {string}
     */
    NumberFormat.locale.tr_TR = NumberFormat.locale.tr;


    /**
     * Number formatting symbols for locale uk.
     * @enum {string}
     */
    NumberFormat.locale.uk = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '\u00A0',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: '\u0415',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: '\u041D\u0435 \u0447\u0438\u0441\u043B\u043E',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'UAH'
    };


    /**
     * Number formatting symbols for locale uk_UA.
     * @enum {string}
     */
    NumberFormat.locale.uk_UA = NumberFormat.locale.uk;


    /**
     * Number formatting symbols for locale ur.
     * @enum {string}
     */
    NumberFormat.locale.ur = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '\u00A4#,##0.00',
      DEF_CURRENCY_CODE: 'PKR'
    };


    /**
     * Number formatting symbols for locale ur_PK.
     * @enum {string}
     */
    NumberFormat.locale.ur_PK = NumberFormat.locale.ur;


    /**
     * Number formatting symbols for locale vi.
     * @enum {string}
     */
    NumberFormat.locale.vi = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '.',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '#,##0.00\u00A0\u00A4',
      DEF_CURRENCY_CODE: 'VND'
    };


    /**
     * Number formatting symbols for locale vi_VN.
     * @enum {string}
     */
    NumberFormat.locale.vi_VN = NumberFormat.locale.vi;


    /**
     * Number formatting symbols for locale zh.
     * @enum {string}
     */
    NumberFormat.locale.zh = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '\u00A4#,##0.00',
      DEF_CURRENCY_CODE: 'CNY'
    };


    /**
     * Number formatting symbols for locale zh_CN.
     * @enum {string}
     */
    NumberFormat.locale.zh_CN = NumberFormat.locale.zh;


    /**
     * Number formatting symbols for locale zh_HK.
     * @enum {string}
     */
    NumberFormat.locale.zh_HK = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: '\u975E\u6578\u503C',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '\u00A4#,##0.00;(\u00A4#,##0.00)',
      DEF_CURRENCY_CODE: 'HKD'
    };


    /**
     * Number formatting symbols for locale zh_Hans.
     * @enum {string}
     */
    NumberFormat.locale.zh_Hans = NumberFormat.locale.zh;


    /**
     * Number formatting symbols for locale zh_Hans_CN.
     * @enum {string}
     */
    NumberFormat.locale.zh_Hans_CN = NumberFormat.locale.zh;


    /**
     * Number formatting symbols for locale zh_TW.
     * @enum {string}
     */
    NumberFormat.locale.zh_TW = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: '\u975E\u6578\u503C',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '\u00A4#,##0.00',
      DEF_CURRENCY_CODE: 'TWD'
    };


    /**
     * Number formatting symbols for locale zu.
     * @enum {string}
     */
    NumberFormat.locale.zu = {
      DECIMAL_SEP: ',',
      GROUP_SEP: '\u00A0',
      PERCENT: '%',
      ZERO_DIGIT: '0',
      PLUS_SIGN: '+',
      MINUS_SIGN: '-',
      EXP_SYMBOL: 'E',
      PERMILL: '\u2030',
      INFINITY: '\u221E',
      NAN: 'NaN',
      DECIMAL_PATTERN: '#,##0.###',
      SCIENTIFIC_PATTERN: '#E0',
      PERCENT_PATTERN: '#,##0%',
      CURRENCY_PATTERN: '\u00A4#,##0.00',
      DEF_CURRENCY_CODE: 'ZAR'
    };


    /**
     * Number formatting symbols for locale zu_ZA.
     * @enum {string}
     */
    NumberFormat.locale.zu_ZA = NumberFormat.locale.zu;

})(this);