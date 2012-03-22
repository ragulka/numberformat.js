// Copyright 2011 The Closure Library Authors. All Rights Reserved
// Copyright 2012 Oliver Wong. All Rights Reserved
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

    var i18n = {};

    /**
     * Number formatting symbols for locale af.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_af = {
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
    i18n.NumberFormatSymbols_af_ZA = i18n.NumberFormatSymbols_af;


    /**
     * Number formatting symbols for locale am.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_am = {
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
    i18n.NumberFormatSymbols_am_ET = i18n.NumberFormatSymbols_am;


    /**
     * Number formatting symbols for locale ar.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_ar = {
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
    i18n.NumberFormatSymbols_ar_EG = i18n.NumberFormatSymbols_ar;


    /**
     * Number formatting symbols for locale bg.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_bg = {
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
    i18n.NumberFormatSymbols_bg_BG = i18n.NumberFormatSymbols_bg;


    /**
     * Number formatting symbols for locale bn.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_bn = {
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
    i18n.NumberFormatSymbols_bn_BD = i18n.NumberFormatSymbols_bn;


    /**
     * Number formatting symbols for locale ca.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_ca = {
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
    i18n.NumberFormatSymbols_ca_ES = i18n.NumberFormatSymbols_ca;


    /**
     * Number formatting symbols for locale cs.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_cs = {
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
    i18n.NumberFormatSymbols_cs_CZ = i18n.NumberFormatSymbols_cs;


    /**
     * Number formatting symbols for locale da.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_da = {
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
    i18n.NumberFormatSymbols_da_DK = i18n.NumberFormatSymbols_da;


    /**
     * Number formatting symbols for locale de.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_de = {
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
    i18n.NumberFormatSymbols_de_AT = {
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
    i18n.NumberFormatSymbols_de_BE = i18n.NumberFormatSymbols_de;


    /**
     * Number formatting symbols for locale de_CH.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_de_CH = {
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
    i18n.NumberFormatSymbols_de_DE = i18n.NumberFormatSymbols_de;


    /**
     * Number formatting symbols for locale de_LU.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_de_LU = i18n.NumberFormatSymbols_de;


    /**
     * Number formatting symbols for locale el.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_el = {
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
    i18n.NumberFormatSymbols_el_GR = i18n.NumberFormatSymbols_el;


    /**
     * Number formatting symbols for locale el_POLYTON.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_el_POLYTON = i18n.NumberFormatSymbols_el;


    /**
     * Number formatting symbols for locale en.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_en = {
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
      DEF_CURRENCY_CODE: 'USD'
    };


    /**
     * Number formatting symbols for locale en_AS.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_en_AS = i18n.NumberFormatSymbols_en;


    /**
     * Number formatting symbols for locale en_AU.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_en_AU = {
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
    i18n.NumberFormatSymbols_en_Dsrt = i18n.NumberFormatSymbols_en;


    /**
     * Number formatting symbols for locale en_Dsrt_US.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_en_Dsrt_US = i18n.NumberFormatSymbols_en;


    /**
     * Number formatting symbols for locale en_GB.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_en_GB = {
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
    i18n.NumberFormatSymbols_en_GU = i18n.NumberFormatSymbols_en;


    /**
     * Number formatting symbols for locale en_IE.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_en_IE = {
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
    i18n.NumberFormatSymbols_en_IN = {
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
    i18n.NumberFormatSymbols_en_MH = i18n.NumberFormatSymbols_en;


    /**
     * Number formatting symbols for locale en_MP.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_en_MP = i18n.NumberFormatSymbols_en;


    /**
     * Number formatting symbols for locale en_SG.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_en_SG = {
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
    i18n.NumberFormatSymbols_en_UM = i18n.NumberFormatSymbols_en;


    /**
     * Number formatting symbols for locale en_US.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_en_US = i18n.NumberFormatSymbols_en;


    /**
     * Number formatting symbols for locale en_VI.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_en_VI = i18n.NumberFormatSymbols_en;


    /**
     * Number formatting symbols for locale en_ZA.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_en_ZA = {
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
    i18n.NumberFormatSymbols_es = {
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
    i18n.NumberFormatSymbols_es_419 = {
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
    i18n.NumberFormatSymbols_es_ES = i18n.NumberFormatSymbols_es;


    /**
     * Number formatting symbols for locale et.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_et = {
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
    i18n.NumberFormatSymbols_et_EE = i18n.NumberFormatSymbols_et;


    /**
     * Number formatting symbols for locale eu.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_eu = {
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
    i18n.NumberFormatSymbols_eu_ES = i18n.NumberFormatSymbols_eu;


    /**
     * Number formatting symbols for locale fa.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_fa = {
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
    i18n.NumberFormatSymbols_fa_IR = i18n.NumberFormatSymbols_fa;


    /**
     * Number formatting symbols for locale fi.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_fi = {
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
    i18n.NumberFormatSymbols_fi_FI = i18n.NumberFormatSymbols_fi;


    /**
     * Number formatting symbols for locale fil.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_fil = {
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
    i18n.NumberFormatSymbols_fil_PH = i18n.NumberFormatSymbols_fil;


    /**
     * Number formatting symbols for locale fr.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_fr = {
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
    i18n.NumberFormatSymbols_fr_BL = i18n.NumberFormatSymbols_fr;


    /**
     * Number formatting symbols for locale fr_CA.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_fr_CA = {
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
    i18n.NumberFormatSymbols_fr_FR = i18n.NumberFormatSymbols_fr;


    /**
     * Number formatting symbols for locale fr_GF.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_fr_GF = i18n.NumberFormatSymbols_fr;


    /**
     * Number formatting symbols for locale fr_GP.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_fr_GP = i18n.NumberFormatSymbols_fr;


    /**
     * Number formatting symbols for locale fr_MC.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_fr_MC = i18n.NumberFormatSymbols_fr;


    /**
     * Number formatting symbols for locale fr_MF.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_fr_MF = i18n.NumberFormatSymbols_fr;


    /**
     * Number formatting symbols for locale fr_MQ.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_fr_MQ = i18n.NumberFormatSymbols_fr;


    /**
     * Number formatting symbols for locale fr_RE.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_fr_RE = i18n.NumberFormatSymbols_fr;


    /**
     * Number formatting symbols for locale fr_YT.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_fr_YT = i18n.NumberFormatSymbols_fr;


    /**
     * Number formatting symbols for locale gl.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_gl = {
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
    i18n.NumberFormatSymbols_gl_ES = i18n.NumberFormatSymbols_gl;


    /**
     * Number formatting symbols for locale gsw.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_gsw = {
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
    i18n.NumberFormatSymbols_gsw_CH = i18n.NumberFormatSymbols_gsw;


    /**
     * Number formatting symbols for locale gu.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_gu = {
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
    i18n.NumberFormatSymbols_gu_IN = i18n.NumberFormatSymbols_gu;


    /**
     * Number formatting symbols for locale he.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_he = {
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
    i18n.NumberFormatSymbols_he_IL = i18n.NumberFormatSymbols_he;


    /**
     * Number formatting symbols for locale hi.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_hi = {
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
    i18n.NumberFormatSymbols_hi_IN = i18n.NumberFormatSymbols_hi;


    /**
     * Number formatting symbols for locale hr.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_hr = {
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
    i18n.NumberFormatSymbols_hr_HR = i18n.NumberFormatSymbols_hr;


    /**
     * Number formatting symbols for locale hu.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_hu = {
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
    i18n.NumberFormatSymbols_hu_HU = i18n.NumberFormatSymbols_hu;


    /**
     * Number formatting symbols for locale id.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_id = {
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
    i18n.NumberFormatSymbols_id_ID = i18n.NumberFormatSymbols_id;


    /**
     * Number formatting symbols for locale in.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_in = {
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
    i18n.NumberFormatSymbols_is = {
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
    i18n.NumberFormatSymbols_is_IS = i18n.NumberFormatSymbols_is;


    /**
     * Number formatting symbols for locale it.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_it = {
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
    i18n.NumberFormatSymbols_it_IT = i18n.NumberFormatSymbols_it;


    /**
     * Number formatting symbols for locale iw.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_iw = {
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
    i18n.NumberFormatSymbols_ja = {
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
    i18n.NumberFormatSymbols_ja_JP = i18n.NumberFormatSymbols_ja;


    /**
     * Number formatting symbols for locale kn.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_kn = {
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
    i18n.NumberFormatSymbols_kn_IN = i18n.NumberFormatSymbols_kn;


    /**
     * Number formatting symbols for locale ko.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_ko = {
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
    i18n.NumberFormatSymbols_ko_KR = i18n.NumberFormatSymbols_ko;


    /**
     * Number formatting symbols for locale ln.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_ln = {
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
    i18n.NumberFormatSymbols_ln_CD = i18n.NumberFormatSymbols_ln;


    /**
     * Number formatting symbols for locale lt.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_lt = {
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
    i18n.NumberFormatSymbols_lt_LT = i18n.NumberFormatSymbols_lt;


    /**
     * Number formatting symbols for locale lv.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_lv = {
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
    i18n.NumberFormatSymbols_lv_LV = i18n.NumberFormatSymbols_lv;


    /**
     * Number formatting symbols for locale ml.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_ml = {
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
    i18n.NumberFormatSymbols_ml_IN = i18n.NumberFormatSymbols_ml;


    /**
     * Number formatting symbols for locale mr.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_mr = {
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
    i18n.NumberFormatSymbols_mr_IN = i18n.NumberFormatSymbols_mr;


    /**
     * Number formatting symbols for locale ms.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_ms = {
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
    i18n.NumberFormatSymbols_ms_MY = i18n.NumberFormatSymbols_ms;


    /**
     * Number formatting symbols for locale mt.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_mt = {
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
    i18n.NumberFormatSymbols_mt_MT = i18n.NumberFormatSymbols_mt;


    /**
     * Number formatting symbols for locale nl.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_nl = {
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
    i18n.NumberFormatSymbols_nl_NL = i18n.NumberFormatSymbols_nl;


    /**
     * Number formatting symbols for locale no.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_no = {
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
    i18n.NumberFormatSymbols_or = {
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
    i18n.NumberFormatSymbols_or_IN = i18n.NumberFormatSymbols_or;


    /**
     * Number formatting symbols for locale pl.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_pl = {
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
    i18n.NumberFormatSymbols_pl_PL = i18n.NumberFormatSymbols_pl;


    /**
     * Number formatting symbols for locale pt.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_pt = {
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
    i18n.NumberFormatSymbols_pt_BR = i18n.NumberFormatSymbols_pt;


    /**
     * Number formatting symbols for locale pt_PT.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_pt_PT = {
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
    i18n.NumberFormatSymbols_ro = {
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
    i18n.NumberFormatSymbols_ro_RO = i18n.NumberFormatSymbols_ro;


    /**
     * Number formatting symbols for locale ru.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_ru = {
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
    i18n.NumberFormatSymbols_ru_RU = i18n.NumberFormatSymbols_ru;


    /**
     * Number formatting symbols for locale sk.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_sk = {
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
    i18n.NumberFormatSymbols_sk_SK = i18n.NumberFormatSymbols_sk;


    /**
     * Number formatting symbols for locale sl.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_sl = {
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
    i18n.NumberFormatSymbols_sl_SI = i18n.NumberFormatSymbols_sl;


    /**
     * Number formatting symbols for locale sq.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_sq = {
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
    i18n.NumberFormatSymbols_sq_AL = i18n.NumberFormatSymbols_sq;


    /**
     * Number formatting symbols for locale sr.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_sr = {
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
    i18n.NumberFormatSymbols_sr_Cyrl_RS = i18n.NumberFormatSymbols_sr;


    /**
     * Number formatting symbols for locale sr_Latn_RS.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_sr_Latn_RS = i18n.NumberFormatSymbols_sr;


    /**
     * Number formatting symbols for locale sv.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_sv = {
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
    i18n.NumberFormatSymbols_sv_SE = i18n.NumberFormatSymbols_sv;


    /**
     * Number formatting symbols for locale sw.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_sw = {
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
    i18n.NumberFormatSymbols_sw_TZ = i18n.NumberFormatSymbols_sw;


    /**
     * Number formatting symbols for locale ta.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_ta = {
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
    i18n.NumberFormatSymbols_ta_IN = i18n.NumberFormatSymbols_ta;


    /**
     * Number formatting symbols for locale te.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_te = {
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
    i18n.NumberFormatSymbols_te_IN = i18n.NumberFormatSymbols_te;


    /**
     * Number formatting symbols for locale th.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_th = {
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
    i18n.NumberFormatSymbols_th_TH = i18n.NumberFormatSymbols_th;


    /**
     * Number formatting symbols for locale tl.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_tl = {
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
    i18n.NumberFormatSymbols_tr = {
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
    i18n.NumberFormatSymbols_tr_TR = i18n.NumberFormatSymbols_tr;


    /**
     * Number formatting symbols for locale uk.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_uk = {
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
    i18n.NumberFormatSymbols_uk_UA = i18n.NumberFormatSymbols_uk;


    /**
     * Number formatting symbols for locale ur.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_ur = {
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
    i18n.NumberFormatSymbols_ur_PK = i18n.NumberFormatSymbols_ur;


    /**
     * Number formatting symbols for locale vi.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_vi = {
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
    i18n.NumberFormatSymbols_vi_VN = i18n.NumberFormatSymbols_vi;


    /**
     * Number formatting symbols for locale zh.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_zh = {
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
    i18n.NumberFormatSymbols_zh_CN = i18n.NumberFormatSymbols_zh;


    /**
     * Number formatting symbols for locale zh_HK.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_zh_HK = {
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
    i18n.NumberFormatSymbols_zh_Hans = i18n.NumberFormatSymbols_zh;


    /**
     * Number formatting symbols for locale zh_Hans_CN.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_zh_Hans_CN = i18n.NumberFormatSymbols_zh;


    /**
     * Number formatting symbols for locale zh_TW.
     * @enum {string}
     */
    i18n.NumberFormatSymbols_zh_TW = {
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
    i18n.NumberFormatSymbols_zu = {
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
    i18n.NumberFormatSymbols_zu_ZA = i18n.NumberFormatSymbols_zu;

    i18n.NumberFormatSymbols = i18n.NumberFormatSymbols_en;

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
          exports = module.exports = i18n;
        }
        exports.i18n = i18n;
    }
    root['i18n'] = i18n;

})(this);