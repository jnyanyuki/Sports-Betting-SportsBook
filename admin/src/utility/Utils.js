import React, { createContext } from 'react'
import { Link } from 'react-router-dom'
import { Transaction } from '@tronscan/client/src/protocol/core/Tron_pb'
import NumberFormat from 'react-number-format'

export const LoadingContext = createContext()

/*eslint-disable */
export const TransactionHashLink = ({ hash }) => (
  <Link className='truncate-ellipsis' to={`/transaction/${hash}`}>
    <div className='ellipsis_box'>
      <div className='ellipsis_box_start'>{hash}</div>
      <div className='ellipsis_box_end'>{hash.slice(hash.length - 5, hash.length)}</div>
    </div>
  </Link>
)

export const AddressLink = ({ address = '' }) => (
  <Link className='truncate-ellipsis' to={`/transaction/${address}`}>
    <div className='ellipsis_box'>
      <div className='ellipsis_box_start'>{address}</div>
      <div className='ellipsis_box_end'>{address.slice(address.length - 5, address.length)}</div>
    </div>
  </Link>
)

export const BlockNumberLink = ({ number, children = null }) => (
  <Link to={`/block/${number}`}>{children || number}</Link>
)

let contractTypes = {}


for (let key of Object.keys(Transaction.Contract.ContractType)) {
  contractTypes[Transaction.Contract.ContractType[key]] = key
}

export const ContractTypes = contractTypes
/*eslint-disable */


// ** Checks if an object is empty (returns boolean)
export const isObjEmpty = obj => Object.keys(obj).length === 0

// ** Returns K format from a number
export const kFormatter = num => (num > 999 ? `${(num / 1000).toFixed(1)}k` : num)

// ** Converts HTML to string
export const htmlToString = html => html.replace(/<\/?[^>]+(>|$)/g, '')

// ** Checks if the passed date is today
const isToday = date => {
  const today = new Date()
  return (
    /* eslint-disable operator-linebreak */
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
    /* eslint-enable */
  )
}

/**
 ** Format and return date in Humanize format
 ** Intl docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 ** Intl Constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * @param {String} value date to format
 * @param {Object} formatting Intl object to format with
 */
export const formatDate = (value, formatting = { month: 'short', day: 'numeric', year: 'numeric' }) => {
  if (!value) return value
  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
}

// ** Returns short month of passed date
export const formatDateToMonthShort = (value, toTimeForCurrentDay = true) => {
  const date = new Date(value)
  let formatting = { month: 'short', day: 'numeric' }

  if (toTimeForCurrentDay && isToday(date)) {
    formatting = { hour: 'numeric', minute: 'numeric' }
  }

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value))
}

// ** React Select Theme Colors
export const selectThemeColors = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: '#7367f01a', // for option hover bg-color
    primary: '#7367f0', // for selected option bg-color
    neutral10: '#7367f0', // for tags bg-color
    neutral20: '#ededed', // for input border-color
    neutral30: '#ededed' // for input hover border-color
  }
})

export const toNumber = (number, fixed = 5) => {
  if (!number || isNaN(number)) {
    return '0.00'
  } else {
    return Number(Number(number).toFixed(fixed))
  }
}

export const toNumberTag = (number, fixed = 5) => {
  if (!number || isNaN(number)) {
    return '0.00'
  } else {
    return <NumberFormat value={Number(Number(number).toFixed(fixed))} displayType='text' thousandSeparator={true} />
  }
}

export const languageCodes = [
  { code: 'af', value: 'af', label: 'Afrikaans' },
  { code: 'am', value: 'am', label: 'Amharic' },
  { code: 'ar', value: 'ar', label: 'Arabic' },
  { code: 'az', value: 'az', label: 'Azerbaijani' },
  { code: 'be', value: 'be', label: 'Belorussian' },
  { code: 'bg', value: 'bg', label: 'Bulgarian' },
  { code: 'bn', value: 'bn', label: 'Bengali' },
  { code: 'bs', value: 'bs', label: 'Bosnian' },
  { code: 'ca', value: 'ca', label: 'Catalan' },
  { code: 'cz', value: 'cs', label: 'Czech' },
  { code: 'cy', value: 'cy', label: 'Cymraeg' },
  { code: 'dk', value: 'da', label: 'Danish' },
  { code: 'de', value: 'de', label: 'German' },
  { code: 'mv', value: 'dv', label: 'Dhivehi' },
  { code: 'us', value: 'en', label: 'English' },
  { code: 'es', value: 'es', label: 'Spanish' },
  { code: 'et', value: 'et', label: 'Estonian' },
  { code: 'eu', value: 'eu', label: 'Basque' },
  { code: 'ir', value: 'fa', label: 'Persian' },
  { code: 'fi', value: 'fi', label: 'Finnish' },
  { code: 'fr', value: 'fr', label: 'French' },
  { code: 'gl', value: 'gl', label: 'Galician' },
  { code: 'gr', value: 'el', label: 'Greek' },
  { code: 'in', value: 'hi', label: 'Hindi' },
  { code: 'hr', value: 'hr', label: 'Croatian' },
  { code: 'hu', value: 'hu', label: 'Hungarian' },
  { code: 'am', value: 'hy', label: 'Armenian' },
  { code: 'is', value: 'is', label: 'Icelandic' },
  { code: 'it', value: 'it', label: 'Italian' },
  { code: 'id', value: 'id', label: 'Indonesian' },
  { code: 'jp', value: 'ja', label: 'Japanese' },
  { code: 'ge', value: 'ka', label: 'Georgian' },
  { code: 'kz', value: 'kk', label: 'Kazakh' },
  { code: 'km', value: 'km', label: 'Khmer' },
  { code: 'kr', value: 'ko', label: 'Korean' },
  { code: 'kg', value: 'ky', label: 'Kyrgyz' },
  { code: 'lt', value: 'lt', label: 'Lithuanian' },
  { code: 'lv', value: 'lv', label: 'Latvian' },
  { code: 'mk', value: 'mk', label: 'Macedonian' },
  { code: 'ml', value: 'ml', label: 'Malayalam' },
  { code: 'mn', value: 'mn', label: 'Mongolian' },
  { code: 'ms', value: 'ms', label: 'Malay' },
  { code: 'nl', value: 'nl', label: 'Dutch' },
  { code: 'no', value: 'no', label: 'Norwegian' },
  { code: 'pl', value: 'pl', label: 'Polish' },
  { code: 'ps', value: 'ps', label: 'Pashto' },
  { code: 'pt', value: 'pt', label: 'Portuguese' },
  { code: 'ro', value: 'ro', label: 'Romanian' },
  { code: 'ru', value: 'ru', label: 'Russian' },
  { code: 'sd', value: 'sd', label: 'Sindhi' },
  { code: 'sk', value: 'sk', label: 'Slovak' },
  { code: 'sl', value: 'sl', label: 'Slovene' },
  { code: 'so', value: 'so', label: 'Somali' },
  { code: 'al', value: 'sq', label: 'Albanian' },
  { code: 'sr', value: 'sr', label: 'Serbian' },
  { code: 'sv', value: 'sv', label: 'Swedish' },
  { code: 'tm', value: 'ta', label: 'Tamil' },
  { code: 'tg', value: 'tg', label: 'Tajik' },
  { code: 'th', value: 'th', label: 'Thai' },
  { code: 'tr', value: 'tr', label: 'Turkish' },
  { code: 'tt', value: 'tt', label: 'Tatar' },
  { code: 'ug', value: 'ug', label: 'Uyghur' },
  { code: 'ua', value: 'uk', label: 'Ukrainian' },
  { code: 'uz', value: 'uz', label: 'Uzbek' },
  { code: 'cn', value: 'zh', label: 'Chinese' },
  { code: 'vi', value: 'vi', label: 'Vietnamese' }
]

export const countryCode = {
  AF: 'Afghanistan',
  AL: 'Albania',
  DZ: 'Algeria',
  AS: 'American Samoa',
  AD: 'Andorra',
  AO: 'Angola',
  AI: 'Anguilla',
  AQ: 'Antarctica',
  AG: 'Antigua and Barbuda',
  AR: 'Argentina',
  AM: 'Armenia',
  AW: 'Aruba',
  AU: 'Australia',
  AT: 'Austria',
  AZ: 'Azerbaijan',
  BS: 'Bahamas',
  BH: 'Bahrain',
  BD: 'Bangladesh',
  BB: 'Barbados',
  BY: 'Belarus',
  BE: 'Belgium',
  BZ: 'Belize',
  BJ: 'Benin',
  BM: 'Bermuda',
  BT: 'Bhutan',
  BO: 'Bolivia (Plurinational State of)',
  BQ: 'Bonaire, Sint Eustatius and Saba',
  BA: 'Bosnia and Herzegovina',
  BW: 'Botswana',
  BV: 'Bouvet Island',
  BR: 'Brazil',
  IO: 'British Indian Ocean Territory',
  BN: 'Brunei Darussalam',
  BG: 'Bulgaria',
  BF: 'Burkina Faso',
  BI: 'Burundi',
  CV: 'Cabo Verde',
  KH: 'Cambodia',
  CM: 'Cameroon',
  CA: 'Canada',
  KY: 'Cayman Islands',
  CF: 'Central African Republic',
  TD: 'Chad',
  CL: 'Chile',
  CN: 'China',
  CX: 'Christmas Island',
  CC: 'Cocos (Keeling) Islands',
  CO: 'Colombia',
  KM: 'Comoros',
  CD: 'Congo (the Democratic Republic of the)',
  CG: 'Congo',
  CK: 'Cook Islands',
  CR: 'Costa Rica',
  HR: 'Croatia',
  CU: 'Cuba',
  CW: 'Curaçao',
  CY: 'Cyprus',
  CZ: 'Czechia',
  CI: `Côte d'Ivoire`,
  DK: 'Denmark',
  DJ: 'Djibouti',
  DM: 'Dominica',
  DO: 'Dominican Republic',
  EC: 'Ecuador',
  EG: 'Egypt',
  SV: 'El Salvador',
  GQ: 'Equatorial Guinea',
  ER: 'Eritrea',
  EE: 'Estonia',
  SZ: 'Eswatini',
  ET: 'Ethiopia',
  FK: 'Falkland Islands (the) [Malvinas]',
  FO: 'Faroe Islands',
  FJ: 'Fiji',
  FI: 'Finland',
  FR: 'France',
  GF: 'French Guiana',
  PF: 'French Polynesia',
  TF: 'French Southern Territories',
  GA: 'Gabon',
  GM: 'Gambia',
  GE: 'Georgia',
  DE: 'Germany',
  GH: 'Ghana',
  GI: 'Gibraltar',
  GR: 'Greece',
  GL: 'Greenland',
  GD: 'Grenada',
  GP: 'Guadeloupe',
  GU: 'Guam',
  GT: 'Guatemala',
  GG: 'Guernsey',
  GN: 'Guinea',
  GW: 'Guinea-Bissau',
  GY: 'Guyana',
  HT: 'Haiti',
  HM: 'Heard Island and McDonald Islands',
  VA: 'Holy See',
  HN: 'Honduras',
  HK: 'Hong Kong',
  HU: 'Hungary',
  IS: 'Iceland',
  IN: 'India',
  ID: 'Indonesia',
  IR: 'Iran (Islamic Republic of)',
  IQ: 'Iraq',
  IE: 'Ireland',
  IM: 'Isle of Man',
  IL: 'Israel',
  IT: 'Italy',
  JM: 'Jamaica',
  JP: 'Japan',
  JE: 'Jersey',
  JO: 'Jordan',
  KZ: 'Kazakhstan',
  KE: 'Kenya',
  KI: 'Kiribati',
  KP: 'North Korea',
  KR: 'South Korea',
  KW: 'Kuwait',
  KG: 'Kyrgyzstan',
  LA: `Lao People's Democratic Republic`,
  LV: 'Latvia',
  LB: 'Lebanon',
  LS: 'Lesotho',
  LR: 'Liberia',
  LY: 'Libya',
  LI: 'Liechtenstein',
  LT: 'Lithuania',
  LU: 'Luxembourg',
  MO: 'Macao',
  MG: 'Madagascar',
  MW: 'Malawi',
  MY: 'Malaysia',
  MV: 'Maldives',
  ML: 'Mali',
  MT: 'Malta',
  MH: 'Marshall Islands',
  MQ: 'Martinique',
  MR: 'Mauritania',
  MU: 'Mauritius',
  YT: 'Mayotte',
  MX: 'Mexico',
  FM: 'Micronesia (Federated States of)',
  MD: 'Moldova (the Republic of)',
  MC: 'Monaco',
  MN: 'Mongolia',
  ME: 'Montenegro',
  MS: 'Montserrat',
  MA: 'Morocco',
  MZ: 'Mozambique',
  MM: 'Myanmar',
  NA: 'Namibia',
  NR: 'Nauru',
  NP: 'Nepal',
  NL: 'Netherlands',
  NC: 'New Caledonia',
  NZ: 'New Zealand',
  NI: 'Nicaragua',
  NE: 'Niger',
  NG: 'Nigeria',
  NU: 'Niue',
  NF: 'Norfolk Island',
  MP: 'Northern Mariana Islands',
  NO: 'Norway',
  OM: 'Oman',
  PK: 'Pakistan',
  PW: 'Palau',
  PS: 'Palestine, State of',
  PA: 'Panama',
  PG: 'Papua New Guinea',
  PY: 'Paraguay',
  PE: 'Peru',
  PH: 'Philippines',
  PN: 'Pitcairn',
  PL: 'Poland',
  PT: 'Portugal',
  PR: 'Puerto Rico',
  QA: 'Qatar',
  MK: 'Republic of North Macedonia',
  RO: 'Romania',
  RU: 'Russian Federation',
  RW: 'Rwanda',
  RE: 'Réunion',
  BL: 'Saint Barthélemy',
  SH: 'Saint Helena, Ascension and Tristan da Cunha',
  KN: 'Saint Kitts and Nevis',
  LC: 'Saint Lucia',
  MF: 'Saint Martin (French part)',
  PM: 'Saint Pierre and Miquelon',
  VC: 'Saint Vincent and the Grenadines',
  WS: 'Samoa',
  SM: 'San Marino',
  ST: 'Sao Tome and Principe',
  SA: 'Saudi Arabia',
  SN: 'Senegal',
  RS: 'Serbia',
  SC: 'Seychelles',
  SL: 'Sierra Leone',
  SG: 'Singapore',
  SX: 'Sint Maarten (Dutch part)',
  SK: 'Slovakia',
  SI: 'Slovenia',
  SB: 'Solomon Islands',
  SO: 'Somalia',
  ZA: 'South Africa',
  GS: 'South Georgia and the South Sandwich Islands',
  SS: 'South Sudan',
  ES: 'Spain',
  LK: 'Sri Lanka',
  SD: 'Sudan',
  SR: 'Suriname',
  SJ: 'Svalbard and Jan Mayen',
  SE: 'Sweden',
  CH: 'Switzerland',
  SY: 'Syrian Arab Republic',
  TW: 'Taiwan (Province of China)',
  TJ: 'Tajikistan',
  TZ: 'Tanzania, United Republic of',
  TH: 'Thailand',
  TL: 'Timor-Leste',
  TG: 'Togo',
  TK: 'Tokelau',
  TO: 'Tonga',
  TT: 'Trinidad and Tobago',
  TN: 'Tunisia',
  TR: 'Turkey',
  TM: 'Turkmenistan',
  TC: 'Turks and Caicos Islands',
  TV: 'Tuvalu',
  UG: 'Uganda',
  UA: 'Ukraine',
  AE: 'United Arab Emirates',
  GB: 'United Kingdom',
  UM: 'United States Minor Outlying Islands',
  US: 'United States',
  UY: 'Uruguay',
  UZ: 'Uzbekistan',
  VU: 'Vanuatu',
  VE: 'Venezuela (Bolivarian Republic of)',
  VN: 'Viet Nam',
  VG: 'Virgin Islands (British)',
  VI: 'Virgin Islands (U.S.)',
  WF: 'Wallis and Futuna',
  EH: 'Western Sahara',
  YE: 'Yemen',
  ZM: 'Zambia',
  ZW: 'Zimbabwe',
  AX: 'Åland Islands'
}

export const countryOptions = [
  {
    value: 'AF',
    label: 'Afghanistan'
  },
  {
    value: 'AL',
    label: 'Albania'
  },
  {
    value: 'DZ',
    label: 'Algeria'
  },
  {
    value: 'AS',
    label: 'American Samoa'
  },
  {
    value: 'AD',
    label: 'Andorra'
  },
  {
    value: 'AO',
    label: 'Angola'
  },
  {
    value: 'AI',
    label: 'Anguilla'
  },
  {
    value: 'AQ',
    label: 'Antarctica'
  },
  {
    value: 'AG',
    label: 'Antigua and Barbuda'
  },
  {
    value: 'AR',
    label: 'Argentina'
  },
  {
    value: 'AM',
    label: 'Armenia'
  },
  {
    value: 'AW',
    label: 'Aruba'
  },
  {
    value: 'AU',
    label: 'Australia'
  },
  {
    value: 'AT',
    label: 'Austria'
  },
  {
    value: 'AZ',
    label: 'Azerbaijan'
  },
  {
    value: 'BS',
    label: 'Bahamas'
  },
  {
    value: 'BH',
    label: 'Bahrain'
  },
  {
    value: 'BD',
    label: 'Bangladesh'
  },
  {
    value: 'BB',
    label: 'Barbados'
  },
  {
    value: 'BY',
    label: 'Belarus'
  },
  {
    value: 'BE',
    label: 'Belgium'
  },
  {
    value: 'BZ',
    label: 'Belize'
  },
  {
    value: 'BJ',
    label: 'Benin'
  },
  {
    value: 'BM',
    label: 'Bermuda'
  },
  {
    value: 'BT',
    label: 'Bhutan'
  },
  {
    value: 'BO',
    label: 'Bolivia (Plurinational State of)'
  },
  {
    value: 'BQ',
    label: 'Bonaire, Sint Eustatius and Saba'
  },
  {
    value: 'BA',
    label: 'Bosnia and Herzegovina'
  },
  {
    value: 'BW',
    label: 'Botswana'
  },
  {
    value: 'BV',
    label: 'Bouvet Island'
  },
  {
    value: 'BR',
    label: 'Brazil'
  },
  {
    value: 'IO',
    label: 'British Indian Ocean Territory'
  },
  {
    value: 'BN',
    label: 'Brunei Darussalam'
  },
  {
    value: 'BG',
    label: 'Bulgaria'
  },
  {
    value: 'BF',
    label: 'Burkina Faso'
  },
  {
    value: 'BI',
    label: 'Burundi'
  },
  {
    value: 'CV',
    label: 'Cabo Verde'
  },
  {
    value: 'KH',
    label: 'Cambodia'
  },
  {
    value: 'CM',
    label: 'Cameroon'
  },
  {
    value: 'CA',
    label: 'Canada'
  },
  {
    value: 'KY',
    label: 'Cayman Islands'
  },
  {
    value: 'CF',
    label: 'Central African Republic'
  },
  {
    value: 'TD',
    label: 'Chad'
  },
  {
    value: 'CL',
    label: 'Chile'
  },
  {
    value: 'CN',
    label: 'China'
  },
  {
    value: 'CX',
    label: 'Christmas Island'
  },
  {
    value: 'CC',
    label: 'Cocos (Keeling) Islands'
  },
  {
    value: 'CO',
    label: 'Colombia'
  },
  {
    value: 'KM',
    label: 'Comoros'
  },
  {
    value: 'CD',
    label: 'Congo (the Democratic Republic of the)'
  },
  {
    value: 'CG',
    label: 'Congo'
  },
  {
    value: 'CK',
    label: 'Cook Islands'
  },
  {
    value: 'CR',
    label: 'Costa Rica'
  },
  {
    value: 'HR',
    label: 'Croatia'
  },
  {
    value: 'CU',
    label: 'Cuba'
  },
  {
    value: 'CW',
    label: 'Curaçao'
  },
  {
    value: 'CY',
    label: 'Cyprus'
  },
  {
    value: 'CZ',
    label: 'Czechia'
  },
  {
    value: 'CI',
    label: `Côte d'Ivoire`
  },
  {
    value: 'DK',
    label: 'Denmark'
  },
  {
    value: 'DJ',
    label: 'Djibouti'
  },
  {
    value: 'DM',
    label: 'Dominica'
  },
  {
    value: 'DO',
    label: 'Dominican Republic'
  },
  {
    value: 'EC',
    label: 'Ecuador'
  },
  {
    value: 'EG',
    label: 'Egypt'
  },
  {
    value: 'SV',
    label: 'El Salvador'
  },
  {
    value: 'GQ',
    label: 'Equatorial Guinea'
  },
  {
    value: 'ER',
    label: 'Eritrea'
  },
  {
    value: 'EE',
    label: 'Estonia'
  },
  {
    value: 'SZ',
    label: 'Eswatini'
  },
  {
    value: 'ET',
    label: 'Ethiopia'
  },
  {
    value: 'EU',
    label: 'European Union'
  },
  {
    value: 'FK',
    label: 'Falkland Islands (the) [Malvinas]'
  },
  {
    value: 'FO',
    label: 'Faroe Islands'
  },
  {
    value: 'FJ',
    label: 'Fiji'
  },
  {
    value: 'FI',
    label: 'Finland'
  },
  {
    value: 'FR',
    label: 'France'
  },
  {
    value: 'GF',
    label: 'French Guiana'
  },
  {
    value: 'PF',
    label: 'French Polynesia'
  },
  {
    value: 'TF',
    label: 'French Southern Territories'
  },
  {
    value: 'GA',
    label: 'Gabon'
  },
  {
    value: 'GM',
    label: 'Gambia'
  },
  {
    value: 'GE',
    label: 'Georgia'
  },
  {
    value: 'DE',
    label: 'Germany'
  },
  {
    value: 'GH',
    label: 'Ghana'
  },
  {
    value: 'GI',
    label: 'Gibraltar'
  },
  {
    value: 'GR',
    label: 'Greece'
  },
  {
    value: 'GL',
    label: 'Greenland'
  },
  {
    value: 'GD',
    label: 'Grenada'
  },
  {
    value: 'GP',
    label: 'Guadeloupe'
  },
  {
    value: 'GU',
    label: 'Guam'
  },
  {
    value: 'GT',
    label: 'Guatemala'
  },
  {
    value: 'GG',
    label: 'Guernsey'
  },
  {
    value: 'GN',
    label: 'Guinea'
  },
  {
    value: 'GW',
    label: 'Guinea-Bissau'
  },
  {
    value: 'GY',
    label: 'Guyana'
  },
  {
    value: 'HT',
    label: 'Haiti'
  },
  {
    value: 'HM',
    label: 'Heard Island and McDonald Islands'
  },
  {
    value: 'VA',
    label: 'Holy See'
  },
  {
    value: 'HN',
    label: 'Honduras'
  },
  {
    value: 'HK',
    label: 'Hong Kong'
  },
  {
    value: 'HU',
    label: 'Hungary'
  },
  {
    value: 'IS',
    label: 'Iceland'
  },
  {
    value: 'IN',
    label: 'India'
  },
  {
    value: 'ID',
    label: 'Indonesia'
  },
  {
    value: 'IR',
    label: 'Iran (Islamic Republic of)'
  },
  {
    value: 'IQ',
    label: 'Iraq'
  },
  {
    value: 'IE',
    label: 'Ireland'
  },
  {
    value: 'IM',
    label: 'Isle of Man'
  },
  {
    value: 'IL',
    label: 'Israel'
  },
  {
    value: 'IT',
    label: 'Italy'
  },
  {
    value: 'JM',
    label: 'Jamaica'
  },
  {
    value: 'JP',
    label: 'Japan'
  },
  {
    value: 'JE',
    label: 'Jersey'
  },
  {
    value: 'JO',
    label: 'Jordan'
  },
  {
    value: 'KZ',
    label: 'Kazakhstan'
  },
  {
    value: 'KE',
    label: 'Kenya'
  },
  {
    value: 'KI',
    label: 'Kiribati'
  },
  {
    value: 'KP',
    label: 'North Korea'
  },
  {
    value: 'KR',
    label: 'South Korea'
  },
  {
    value: 'KW',
    label: 'Kuwait'
  },
  {
    value: 'KG',
    label: 'Kyrgyzstan'
  },
  {
    value: 'LA',
    label: `Lao People's Democratic Republic`
  },
  {
    value: 'LV',
    label: 'Latvia'
  },
  {
    value: 'LB',
    label: 'Lebanon'
  },
  {
    value: 'LS',
    label: 'Lesotho'
  },
  {
    value: 'LR',
    label: 'Liberia'
  },
  {
    value: 'LY',
    label: 'Libya'
  },
  {
    value: 'LI',
    label: 'Liechtenstein'
  },
  {
    value: 'LT',
    label: 'Lithuania'
  },
  {
    value: 'LU',
    label: 'Luxembourg'
  },
  {
    value: 'MO',
    label: 'Macao'
  },
  {
    value: 'MG',
    label: 'Madagascar'
  },
  {
    value: 'MW',
    label: 'Malawi'
  },
  {
    value: 'MY',
    label: 'Malaysia'
  },
  {
    value: 'MV',
    label: 'Maldives'
  },
  {
    value: 'ML',
    label: 'Mali'
  },
  {
    value: 'MT',
    label: 'Malta'
  },
  {
    value: 'MH',
    label: 'Marshall Islands'
  },
  {
    value: 'MQ',
    label: 'Martinique'
  },
  {
    value: 'MR',
    label: 'Mauritania'
  },
  {
    value: 'MU',
    label: 'Mauritius'
  },
  {
    value: 'YT',
    label: 'Mayotte'
  },
  {
    value: 'MX',
    label: 'Mexico'
  },
  {
    value: 'FM',
    label: 'Micronesia (Federated States of)'
  },
  {
    value: 'MD',
    label: 'Moldova (the Republic of)'
  },
  {
    value: 'MC',
    label: 'Monaco'
  },
  {
    value: 'MN',
    label: 'Mongolia'
  },
  {
    value: 'ME',
    label: 'Montenegro'
  },
  {
    value: 'MS',
    label: 'Montserrat'
  },
  {
    value: 'MA',
    label: 'Morocco'
  },
  {
    value: 'MZ',
    label: 'Mozambique'
  },
  {
    value: 'MM',
    label: 'Myanmar'
  },
  {
    value: 'NA',
    label: 'Namibia'
  },
  {
    value: 'NR',
    label: 'Nauru'
  },
  {
    value: 'NP',
    label: 'Nepal'
  },
  {
    value: 'NL',
    label: 'Netherlands'
  },
  {
    value: 'NC',
    label: 'New Caledonia'
  },
  {
    value: 'NZ',
    label: 'New Zealand'
  },
  {
    value: 'NI',
    label: 'Nicaragua'
  },
  {
    value: 'NE',
    label: 'Niger'
  },
  {
    value: 'NG',
    label: 'Nigeria'
  },
  {
    value: 'NU',
    label: 'Niue'
  },
  {
    value: 'NF',
    label: 'Norfolk Island'
  },
  {
    value: 'MP',
    label: 'Northern Mariana Islands'
  },
  {
    value: 'NO',
    label: 'Norway'
  },
  {
    value: 'OM',
    label: 'Oman'
  },
  {
    value: 'PK',
    label: 'Pakistan'
  },
  {
    value: 'PW',
    label: 'Palau'
  },
  {
    value: 'PS',
    label: 'Palestine, State of'
  },
  {
    value: 'PA',
    label: 'Panama'
  },
  {
    value: 'PG',
    label: 'Papua New Guinea'
  },
  {
    value: 'PY',
    label: 'Paraguay'
  },
  {
    value: 'PE',
    label: 'Peru'
  },
  {
    value: 'PH',
    label: 'Philippines'
  },
  {
    value: 'PN',
    label: 'Pitcairn'
  },
  {
    value: 'PL',
    label: 'Poland'
  },
  {
    value: 'PT',
    label: 'Portugal'
  },
  {
    value: 'PR',
    label: 'Puerto Rico'
  },
  {
    value: 'QA',
    label: 'Qatar'
  },
  {
    value: 'MK',
    label: 'Republic of North Macedonia'
  },
  {
    value: 'RO',
    label: 'Romania'
  },
  {
    value: 'RU',
    label: 'Russian Federation'
  },
  {
    value: 'RW',
    label: 'Rwanda'
  },
  {
    value: 'RE',
    label: 'Réunion'
  },
  {
    value: 'BL',
    label: 'Saint Barthélemy'
  },
  {
    value: 'SH',
    label: 'Saint Helena, Ascension and Tristan da Cunha'
  },
  {
    value: 'KN',
    label: 'Saint Kitts and Nevis'
  },
  {
    value: 'LC',
    label: 'Saint Lucia'
  },
  {
    value: 'MF',
    label: 'Saint Martin (French part)'
  },
  {
    value: 'PM',
    label: 'Saint Pierre and Miquelon'
  },
  {
    value: 'VC',
    label: 'Saint Vincent and the Grenadines'
  },
  {
    value: 'WS',
    label: 'Samoa'
  },
  {
    value: 'SM',
    label: 'San Marino'
  },
  {
    value: 'ST',
    label: 'Sao Tome and Principe'
  },
  {
    value: 'SA',
    label: 'Saudi Arabia'
  },
  {
    value: 'SN',
    label: 'Senegal'
  },
  {
    value: 'RS',
    label: 'Serbia'
  },
  {
    value: 'SC',
    label: 'Seychelles'
  },
  {
    value: 'SL',
    label: 'Sierra Leone'
  },
  {
    value: 'SG',
    label: 'Singapore'
  },
  {
    value: 'SX',
    label: 'Sint Maarten (Dutch part)'
  },
  {
    value: 'SK',
    label: 'Slovakia'
  },
  {
    value: 'SI',
    label: 'Slovenia'
  },
  {
    value: 'SB',
    label: 'Solomon Islands'
  },
  {
    value: 'SO',
    label: 'Somalia'
  },
  {
    value: 'ZA',
    label: 'South Africa'
  },
  {
    value: 'GS',
    label: 'South Georgia and the South Sandwich Islands'
  },
  {
    value: 'SS',
    label: 'South Sudan'
  },
  {
    value: 'ES',
    label: 'Spain'
  },
  {
    value: 'LK',
    label: 'Sri Lanka'
  },
  {
    value: 'SD',
    label: 'Sudan'
  },
  {
    value: 'SR',
    label: 'Suriname'
  },
  {
    value: 'SJ',
    label: 'Svalbard and Jan Mayen'
  },
  {
    value: 'SE',
    label: 'Sweden'
  },
  {
    value: 'CH',
    label: 'Switzerland'
  },
  {
    value: 'SY',
    label: 'Syrian Arab Republic'
  },
  {
    value: 'TW',
    label: 'Taiwan (Province of China)'
  },
  {
    value: 'TJ',
    label: 'Tajikistan'
  },
  {
    value: 'TZ',
    label: 'Tanzania, United Republic of'
  },
  {
    value: 'TH',
    label: 'Thailand'
  },
  {
    value: 'TL',
    label: 'Timor-Leste'
  },
  {
    value: 'TG',
    label: 'Togo'
  },
  {
    value: 'TK',
    label: 'Tokelau'
  },
  {
    value: 'TO',
    label: 'Tonga'
  },
  {
    value: 'TT',
    label: 'Trinidad and Tobago'
  },
  {
    value: 'TN',
    label: 'Tunisia'
  },
  {
    value: 'TR',
    label: 'Turkey'
  },
  {
    value: 'TM',
    label: 'Turkmenistan'
  },
  {
    value: 'TC',
    label: 'Turks and Caicos Islands'
  },
  {
    value: 'TV',
    label: 'Tuvalu'
  },
  {
    value: 'UG',
    label: 'Uganda'
  },
  {
    value: 'UA',
    label: 'Ukraine'
  },
  {
    value: 'AE',
    label: 'United Arab Emirates'
  },
  {
    value: 'GB',
    label: 'United Kingdom'
  },
  {
    value: 'UM',
    label: 'United States Minor Outlying Islands'
  },
  {
    value: 'US',
    label: 'United States'
  },
  {
    value: 'UY',
    label: 'Uruguay'
  },
  {
    value: 'UZ',
    label: 'Uzbekistan'
  },
  {
    value: 'VU',
    label: 'Vanuatu'
  },
  {
    value: 'VE',
    label: 'Venezuela (Bolivarian Republic of)'
  },
  {
    value: 'VN',
    label: 'Viet Nam'
  },
  {
    value: 'VG',
    label: 'Virgin Islands (British)'
  },
  {
    value: 'VI',
    label: 'Virgin Islands (U.S.)'
  },
  {
    value: 'WF',
    label: 'Wallis and Futuna'
  },
  {
    value: 'EH',
    label: 'Western Sahara'
  },
  {
    value: 'YE',
    label: 'Yemen'
  },
  {
    value: 'ZM',
    label: 'Zambia'
  },
  {
    value: 'ZW',
    label: 'Zimbabwe'
  },
  {
    value: 'AX',
    label: 'Åland Islands'
  }
]