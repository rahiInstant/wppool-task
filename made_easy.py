textStr = """
Adyen
AFRM
Payments
$17.15
$50.5
49.0%
15.8%
6.3
24.3%
Affirm
AFRM
Lending
$16.12
$4.7
32.0%
48.7%
4.9
77.1%
Alkami Technology
ALKT
B2B SaaS
$16.27
$1.5
34.0%
53.0%
7.0
10.0%
AvidXchange
AVDX
Payments
$10.21
$2.0
27.0%
61.5%
6.0
10.5%
Bakkt Holdings
BKKT
Wealth
$1.32
$0.1
38%
--
0.4
13.8%
Virtu Financial Inc
VIRT
Wealth
$17.0
$3.1
-22.0%
38.2%
2.6
-17.8%
Adyen
AFRM
Payments
$17.15
$50.5
49.0%
15.8%
6.3
24.3%
Affirm
AFRM
Lending
$16.12
$4.7
32.0%
48.7%
4.9
77.1%
Alkami Technology
ALKT
B2B SaaS
$16.27
$1.5
34.0%
53.0%
7.0
10.0%
AvidXchange
AVDX
Payments
$10.21
$2.0
27.0%
61.5%
6.0
10.5%"""

data = textStr.split("\n")
store = []
tempArr = []
for i,value in enumerate(data):
    tempArr.append(data[i])
    if i % 9 == 0 and len(tempArr) > 8:
        anyData = tempArr.copy()
        store.append(
            {
                "company": anyData[0],
                "ticker": anyData[1],
                "vertical": anyData[2],
                "price": anyData[3],
                "market cap ($b)": anyData[4],
                "revenue growth": anyData[5],
                "gross margin": anyData[6],
                "ev/revenue": anyData[7],
                "ytd performance": anyData[8],
            }
        )
        tempArr.clear()
print(store)
