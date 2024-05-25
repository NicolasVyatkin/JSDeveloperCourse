const data = [
	{
		r030: 36,
		txt: 'Австралійський долар',
		rate: 25.534,
		cc: 'AUD',
		exchangedate: '11.08.2022'
	},
	{
		r030: 124,
		txt: 'Канадський долар',
		rate: 28.394,
		cc: 'CAD',
		exchangedate: '11.08.2022'
	},
	{
		r030: 156,
		txt: 'Юань Женьміньбі',
		rate: 5.4157,
		cc: 'CNY',
		exchangedate: '11.08.2022'
	},
	{
		r030: 191,
		txt: 'Куна',
		rate: 4.991,
		cc: 'HRK',
		exchangedate: '11.08.2022'
	},
	{
		r030: 203,
		txt: 'Чеська крона',
		rate: 1.5375,
		cc: 'CZK',
		exchangedate: '11.08.2022'
	},
	{
		r030: 208,
		txt: 'Данська крона',
		rate: 5.042,
		cc: 'DKK',
		exchangedate: '11.08.2022'
	},
	{
		r030: 344,
		txt: 'Гонконгівський долар',
		rate: 4.6594,
		cc: 'HKD',
		exchangedate: '11.08.2022'
	},
	{
		r030: 348,
		txt: 'Форинт',
		rate: 0.094334,
		cc: 'HUF',
		exchangedate: '11.08.2022'
	},
	{
		r030: 356,
		txt: 'Індійська рупія',
		rate: 0.45986,
		cc: 'INR',
		exchangedate: '11.08.2022'
	},
	{
		r030: 360,
		txt: 'Рупія',
		rate: 0.0024589,
		cc: 'IDR',
		exchangedate: '11.08.2022'
	},
	{
		r030: 376,
		txt: 'Новий ізраїльський шекель',
		rate: 11.1195,
		cc: 'ILS',
		exchangedate: '11.08.2022'
	},
	{
		r030: 392,
		txt: 'Єна',
		rate: 0.27118,
		cc: 'JPY',
		exchangedate: '11.08.2022'
	},
	{
		r030: 398,
		txt: 'Теньге',
		rate: 0.076443,
		cc: 'KZT',
		exchangedate: '11.08.2022'
	},
	{
		r030: 410,
		txt: 'Вона',
		rate: 0.0279,
		cc: 'KRW',
		exchangedate: '11.08.2022'
	},
	{
		r030: 484,
		txt: 'Мексиканське песо',
		rate: 1.8099,
		cc: 'MXN',
		exchangedate: '11.08.2022'
	},
	{
		r030: 498,
		txt: 'Молдовський лей',
		rate: 1.8951,
		cc: 'MDL',
		exchangedate: '11.08.2022'
	},
	{
		r030: 554,
		txt: 'Новозеландський долар',
		rate: 23.1187,
		cc: 'NZD',
		exchangedate: '11.08.2022'
	},
	{
		r030: 578,
		txt: 'Норвезька крона',
		rate: 3.7858,
		cc: 'NOK',
		exchangedate: '11.08.2022'
	},
	{
		r030: 643,
		txt: 'Російський рубль',
		rate: 0.60013,
		cc: 'RUB',
		exchangedate: '11.08.2022'
	},
	{
		r030: 702,
		txt: 'Сінгапурський долар',
		rate: 26.5644,
		cc: 'SGD',
		exchangedate: '11.08.2022'
	},
	{
		r030: 710,
		txt: 'Ренд',
		rate: 2.2218,
		cc: 'ZAR',
		exchangedate: '11.08.2022'
	},
	{
		r030: 752,
		txt: 'Шведська крона',
		rate: 3.6121,
		cc: 'SEK',
		exchangedate: '11.08.2022'
	},
	{
		r030: 756,
		txt: 'Швейцарський франк',
		rate: 38.5704,
		cc: 'CHF',
		exchangedate: '11.08.2022'
	},
	{
		r030: 818,
		txt: 'Єгипетський фунт',
		rate: 1.9112,
		cc: 'EGP',
		exchangedate: '11.08.2022'
	},
	{
		r030: 826,
		txt: 'Фунт стерлінгів',
		rate: 44.3285,
		cc: 'GBP',
		exchangedate: '11.08.2022'
	},
	{
		r030: 840,
		txt: 'Долар США',
		rate: 36.5686,
		cc: 'USD',
		exchangedate: '11.08.2022'
	},
	{
		r030: 933,
		txt: 'Білоруський рубль',
		rate: 13.2919,
		cc: 'BYN',
		exchangedate: '11.08.2022'
	},
	{
		r030: 944,
		txt: 'Азербайджанський манат',
		rate: 21.5655,
		cc: 'AZN',
		exchangedate: '11.08.2022'
	},
	{
		r030: 946,
		txt: 'Румунський лей',
		rate: 7.6344,
		cc: 'RON',
		exchangedate: '11.08.2022'
	},
	{
		r030: 949,
		txt: 'Турецька ліра',
		rate: 2.0366,
		cc: 'TRY',
		exchangedate: '11.08.2022'
	},
	{
		r030: 960,
		txt: 'СПЗ (спеціальні права запозичення)',
		rate: 48.3486,
		cc: 'XDR',
		exchangedate: '11.08.2022'
	},
	{
		r030: 975,
		txt: 'Болгарський лев',
		rate: 19.1689,
		cc: 'BGN',
		exchangedate: '11.08.2022'
	},
	{
		r030: 978,
		txt: 'Євро',
		rate: 37.5102,
		cc: 'EUR',
		exchangedate: '11.08.2022'
	},
	{
		r030: 985,
		txt: 'Злотий',
		rate: 7.9745,
		cc: 'PLN',
		exchangedate: '11.08.2022'
	},
	{
		r030: 12,
		txt: 'Алжирський динар',
		rate: 0.25091,
		cc: 'DZD',
		exchangedate: '11.08.2022'
	},
	{
		r030: 50,
		txt: 'Така',
		rate: 0.38615,
		cc: 'BDT',
		exchangedate: '11.08.2022'
	},
	{
		r030: 51,
		txt: 'Вірменський драм',
		rate: 0.089693,
		cc: 'AMD',
		exchangedate: '11.08.2022'
	},
	{
		r030: 214,
		txt: 'Домініканське песо',
		rate: 0.67246,
		cc: 'DOP',
		exchangedate: '11.08.2022'
	},
	{
		r030: 364,
		txt: 'Іранський ріал',
		rate: 0.00087068,
		cc: 'IRR',
		exchangedate: '11.08.2022'
	},
	{
		r030: 368,
		txt: 'Іракський динар',
		rate: 0.025047,
		cc: 'IQD',
		exchangedate: '11.08.2022'
	},
	{
		r030: 417,
		txt: 'Сом',
		rate: 0.43966,
		cc: 'KGS',
		exchangedate: '11.08.2022'
	},
	{
		r030: 422,
		txt: 'Ліванський фунт',
		rate: 0.024258,
		cc: 'LBP',
		exchangedate: '11.08.2022'
	},
	{
		r030: 434,
		txt: 'Лівійський динар',
		rate: 7.5137,
		cc: 'LYD',
		exchangedate: '11.08.2022'
	},
	{
		r030: 458,
		txt: 'Малайзійський ринггіт',
		rate: 8.2162,
		cc: 'MYR',
		exchangedate: '11.08.2022'
	},
	{
		r030: 504,
		txt: 'Марокканський дирхам',
		rate: 3.5527,
		cc: 'MAD',
		exchangedate: '11.08.2022'
	},
	{
		r030: 586,
		txt: 'Пакистанська рупія',
		rate: 0.15316,
		cc: 'PKR',
		exchangedate: '11.08.2022'
	},
	{
		r030: 682,
		txt: 'Саудівський ріял',
		rate: 9.7363,
		cc: 'SAR',
		exchangedate: '11.08.2022'
	},
	{
		r030: 704,
		txt: 'Донг',
		rate: 0.0015659,
		cc: 'VND',
		exchangedate: '11.08.2022'
	},
	{
		r030: 764,
		txt: 'Бат',
		rate: 1.00882,
		cc: 'THB',
		exchangedate: '11.08.2022'
	},
	{
		r030: 784,
		txt: 'Дирхам ОАЕ',
		rate: 9.9558,
		cc: 'AED',
		exchangedate: '11.08.2022'
	},
	{
		r030: 788,
		txt: 'Туніський динар',
		rate: 11.6305,
		cc: 'TND',
		exchangedate: '11.08.2022'
	},
	{
		r030: 860,
		txt: 'Узбецький сум',
		rate: 0.0033511,
		cc: 'UZS',
		exchangedate: '11.08.2022'
	},
	{
		r030: 901,
		txt: 'Новий тайванський долар',
		rate: 1.22234,
		cc: 'TWD',
		exchangedate: '11.08.2022'
	},
	{
		r030: 934,
		txt: 'Туркменський новий манат',
		rate: 10.4482,
		cc: 'TMT',
		exchangedate: '11.08.2022'
	},
	{
		r030: 941,
		txt: 'Сербський динар',
		rate: 0.31815,
		cc: 'RSD',
		exchangedate: '11.08.2022'
	},
	{
		r030: 972,
		txt: 'Сомоні',
		rate: 3.562,
		cc: 'TJS',
		exchangedate: '11.08.2022'
	},
	{
		r030: 981,
		txt: 'Ларі',
		rate: 13.2615,
		cc: 'GEL',
		exchangedate: '11.08.2022'
	},
	{
		r030: 986,
		txt: 'Бразильський реал',
		rate: 7.056,
		cc: 'BRL',
		exchangedate: '11.08.2022'
	},
	{
		r030: 959,
		txt: 'Золото',
		rate: 65546.29,
		cc: 'XAU',
		exchangedate: '11.08.2022'
	},
	{
		r030: 961,
		txt: 'Срібло',
		rate: 748.9,
		cc: 'XAG',
		exchangedate: '11.08.2022'
	},
	{
		r030: 962,
		txt: 'Платина',
		rate: 34194.93,
		cc: 'XPT',
		exchangedate: '11.08.2022'
	},
	{
		r030: 964,
		txt: 'Паладій',
		rate: 80457.14,
		cc: 'XPD',
		exchangedate: '11.08.2022'
	}
];

export default data;
