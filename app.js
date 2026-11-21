import {ready,db,auth,FS,AU} from './fb.js?v=13';
export const DEFAULT=[
 {id:'best',t:'Лучшая карта',d:'Главная номинация премии. Текст-заглушка.',c:'#b8f25b'},
 {id:'scary',t:'Самая страшная карта',d:'Текст-заглушка описания номинации.',c:'#ff6b5e'},
 {id:'story',t:'Лучшая сюжетная карта',d:'Текст-заглушка описания номинации.',c:'#5bc8ff'},
 {id:'sound',t:'Карта с лучшими звуками',d:'Текст-заглушка описания номинации.',c:'#ffc83d'},
 {id:'mode',t:'Лучший режим',d:'Текст-заглушка описания номинации.',c:'#ff7ac8'},
 {id:'multi',t:'Лучший мультиплеер режим',d:'Текст-заглушка описания номинации.',c:'#6c8cff'},
 {id:'collab',t:'Лучшая коллаба',d:'Текст-заглушка описания номинации.',c:'#ff9f43'},
 {id:'funny',t:'Самая смешная карта',d:'Текст-заглушка описания номинации.',c:'#ffe14d'},
 {id:'innovation',t:'Инновация года',d:'Текст-заглушка описания номинации.',c:'#34e0b4'},
 {id:'visuals',t:'Самые лучшие визуалы',d:'Текст-заглушка описания номинации.',c:'#e879f9'},
 {id:'mechanics',t:'Самые лучшие механики',d:'Текст-заглушка описания номинации.',c:'#4dd0e1'},
 {id:'modded',t:'Лучшая модовая карта',d:'Текст-заглушка описания номинации.',c:'#b08cff'},
 {id:'vanilla',t:'Лучшая ванильная карта',d:'Текст-заглушка описания номинации.',c:'#8fd16b'}
];
export const ICONS={
 best:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFAklEQVR4AeyV+29URRTHvzP37m63ZbEWFH/BKCEkPFoqj5aHvBJEeRgCkpig0ZiICfoP+IOvxATjI8Ef/EUTgUgkmghpfCSCCQSELm3p0gIRUcDQ8mgKhd12777uvXM8M9e9pRqQWmMTw6SfO3Pnzjnne87MTiVGud0VcLcCI6pAvm8rKTdFIznHIxIwksBl25EJ2P8mik1Ly77+UR8K8NunD7uUfs6BZriR/ZMrwlihADFj93D9oHLN64bhGorJm0KTUAB1DU6GX28zyB+pJ6ICNLkfJoQZ3cYk/ERHNobjUEA48x8PQgH9h5tRTE66o0yKByZRbMZmiMg4Q2zOq0h/Iu7MlmMcb/JQbqGAysaV5bm/7VV0LEAZQGUD2MK1Yvy8s7+ZKwbXhgJE9WRjTSfqb5mJu3886b2P1b7Eex8x68uPmvXvwN03jq5us29p751YQtnT3fDSbtkMgwJ+3o5I9UR4fZdxfe9ft8I5NIXshd8hOu15kF+E6G8GnPPGkUAausm5r6Fm3fvIfBEfIuLs1jjdOLOeZDSOKvgo5PXqgFAA4g+YGWv2W0hEs3AP3D/ESSwSB4mxEFxqUTgBRMeAX4DcBdClfdAiNL7yUGHbKLfeT2166LHFSLgOUEojW1SQUpU/D1YA+R4OEOixGnZB4+cPkp9LksrtJVm7BeR8z1m3GeOOJ3bgx8d3Gr5e1QLVfcDM2zILsewN+GdXk39+A41fvAK60bXjoCunUREViEb1TIAMuuApVOGPAWcgbAgRZwAhq/iwXYDJHEHLeRIlHmoq9A8gwq569nE19sLubWI7CQHOlKtBN7hilgWQj6JLKHmCLYM/GXTB0xP84UoT4P1kEPAg2DmV2IETZL5/znYkl+3A/ORBLNnzmaGutho7lh7Cx48mIewIhMV4/aASV7WrlX8wjsHPlBCPWIgvmBcE5OcQAZKz1gcMTiuXmg1LHeykg8dBcF4P9oEbPgv98BWIz7caIhUxRCQhakPnDOJzoHyPX3wIwWs5czCup7gjSI6jfWmGCNATN0POkSHBb/72b41DAd6FAbjJw/BbD6Fvz86A3bugOpugTn4Ddepb+KmvcJUEruYJvx08i3TbrwZZHIDeqggfrlJbM/pbjsJpb4Hf0YZsZw8utuQM544pXOwSJk45gVBAicuqyXsS91Qpw72VAoII5OVBbo73V+DFbWPwzEc1SJ1x0NSZMXzZ7mDDuxY2bLHgsp+y8z/3iZhCFHwIb1pjBHipR6hqVh2qGhqQmL8I1px5BtnQCEycCvlgXUDdRliznoY9ey1Wvx3Fc+9VGF7+IILY/HWoWLAGiUVrMHbxWiSWPAV7wUr2OQUTFlYaJjZGcd/DEm5BQcfUAo0AcIYayVlS9oqeD5Ax04vqWoiauXwPdEPlL3F/EfHGBkTmLjeounpQ/jJfNPz/YaALyJyHutQO6vkFlOW5LF+9TKGfD6GSSIwR0PG0cyOArvFtxqjeM6C+c+woG+D26zWg6ykgfYzn+tgww9sywPMub0uvQTsTxDed4vXFa4DG4USyPXxTZvhdGYQivogV0nyGdEx2AiMgsiovNPbKgrBXecKadTJgZkpYM5LCqjsm5LRmYU07KqypzUJOTfJ7i7CmtwbUn+I1nUJOTwnZ2MV0C2u5wwwI+8m8qHrWC3jBF9WbPDFhM5l4oQA9GC1MBUYruI77/xegs7wdvwMAAP//347DqAAAAAZJREFUAwDuQEZfra90QwAAAABJRU5ErkJggg==',
 scary:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACpElEQVR4AezXS0iUURjG8fecQdQISiVKgrRMc5MZZVlhtXBrhGJXKIWgTbSJyC6LaBEEQi1CuywywbAMQyJII4KILMXsAtNCcKgQEjQno0mlvtP8g5H8DjYzDp9BJPNjOGfe83zPGd2oJbEfldhxkUQLmL9dINHnJ/wN/EMFLpanGEx3pebqOQY/nhaYP2EG0+XwDEQ+T/SPMJIz4/fJAodaxxRoh0hi075Ug8oD2QLJyTG/FDU6Eqbz18jvmAFnEMkhEzwDkf3JApGN2X63CjzxTwhenJpnsOvgUsG3wIjBozP3DUzXXoWX52868F+94yDoH3LAGZABMuG+oFXAPeD12irQ88ER5K9OE8iKQoPUsgrB1qpchfbGgMG9xxOC5ragIL1so0AX7nRABsiE+0JWAfeA12urQN9XUdh97J2gv7HD4NnZJgPf8vWCLZvnC6p3pAlKNyQJWk90CELtDQIyQCbcF7IKuAe8XlsF6stTDW5dyBaUHxnSqKod0RgbDSok5yxQyMiaK1h3eLtGzfWQRnFFQEAGyIT7QlYB94DXa6vA3d5xgS9viSAr3AD+dOWgYFmL4HtmnoJZuVaDPbzNTHHAGZABMhGOm/KyCkz5dBYWVoHhkBE0ne4WXK5fJNCdJYLX/ZWColUtDvaUtjpgD76HRYLwGQ0yQCbcd7IKuAe8XlsFng8ahf03QgrbTg4KLh3t0kgKvHLQeWWx4HZbsSDFBB3U1XRrcAZkgEy4L2QVcA94vY5aoGfYKBTmJQuG+kY1Pg2Ma8jCXI3BB280mAFnEO0CUQtEC0j085gLbDr3WeF43UfB+4FxB+EC/G9g2AMzCO/H9Iq5QExpMxiKu8C1XlEoqf3igy+jQYM9xNsh7gLxPiDa/P8Cnn8D0X4FPwEAAP//qJc4tQAAAAZJREFUAwBRz7VQrfnZ3QAAAABJRU5ErkJggg==',
 story:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAHj0lEQVR4AdSWDWxV5RnHf897zm1vLbYMygZki7ox55YNkS/HXGGakBkSykAGQ0EjICtxMMfIiGgENz+mhTkDBB2iSCS0VDfAqeAkKIgjZWPCBoJARQprCy0f/bjtvefj3fPeTgkb1ElYlr05zznnvu/z8X/+7/M+5xr+x+P/E8CgIuzkr3ZI6dfEjvsi9mKJ/FQMLL1JrAtYtcpj2dM9WPxgPgvuy6dbUi42PqYzS5elC+rEbvRs6RzDoiW9sENeguteIHl9CckhwxndtzMvna+dA8BR6zJ0klqdY12W0+YX4STO64YTb9AKsBYhIq7ZBvX7yM/tPEhnq8YFcxk62f7bHix5qigryYEjkF5D4OqpcM0c6Lcce+3T2OYNxEcXYg/djySSSBzx2V62sxidrpmlTxhKFxVTuqkCU/y2SpXKW0S9J0LvKdB+BE6/DvvvRqrnYevfRMJWRCxiDOIL3Xt7/FCLkYsYpu2kR7rh88SpnsStx4lSx/S9ARMnsEErNmpGEoWQ6AEmByOxhhHiWLKlbwV8H/J9y+x+HUU6d4Cxs66Tc0SNznuZk4cy+FckIL0Pjj2MOfpz5Mhc5MPHkJonMS1/xzZVa7YeNo4ZXfIuo0buZMzonZhCjWw9xWUUGISxZdFDXfjFq3dT9vKdLFh+LWXLrmbSUEV53vBgjEh2SSTK0mpxGapjo/PGYjtW9W4xCaulJ4iByKVu1EZ1dJFMjAJAmXFz+sMGxFEr6pQuuYYLMWLWbSI77IlX1FqYPGoTt5a8ydiR22hpDRBfo6lGHML3S3Zp8A5IOZ4+jWNFn3oqnJaT8HQGu1uP6XtvYMgBXfvS9JE8/mIJZZUlPHJfkoWL/Y8BmaJ8daAB3GWNT2sgBBEYgUm3/YUbv1vlljAOiOdhQ8PvNnybyrXfJD4RIuic3t2FDlEGhRC0VmyqCWlpJT78J7VXVv0ccobeS9ynhIUbhvFLPVzmtYN8PMTLJaGZaX1lqZdI6JEDIoomCqis7Mu6VwYhaWUmCjVGjNV5q1mqBqHmkm5zb7lqBKiOY0BsRPyBJnL4j1C7Hs60YlsK1DaBefY9ZNnklaoN1oY8s7aErv9srS+tL6Zi7UCsFhe6lpV0M1H6DBnNjjijQVQ0sKf8O5KamyyjpxxjYmk9glFbrQdNwGoBa1FgG49iq3cQ7t1M3Z6MagBuG2zdbs1ayEt6PLOmmMqXhyJaYKLboi+KTiM4X+p2+PgD3DLhfaJIJ2yMp0ttAaR162Y9GyuL0KY0xmGEaMUKWlvTj2GSWtRqI76H5/mkMtIBILsNYROeCbFRO8YTUFpxoy2FRCn1rhUdpLll/B4KtPv5RpMPQ9UzHNqnIDzongfqQrdCsn2BZBKr6NyBOdUujL6tjttLj6uhAhfD5irbAcBtw5YVp7GZFnDNRymf8L23mTByK+N+8FdGjdnD+EkHGXvrfoIYXONJCCSMp4Db0Ij6jh5FQ+zDPXcVcNedhUqcQasPvAS+AlQiSCkarRwFLuhrBwCX6E0rkf3Lt3Js8y7c3mYJUCYyCgYs7Ro4Vg+aEE0as6KiD6nqOuyRRpZstMyf6TFvRoIfTS2k+Ds9Kb6xpwb2MGpgw0AJtaTULqFAInUetbbyTg1nATgQgabnk0EEVq8ZwHMV/dFWjzHonCCgmQqvruuH5+XpcRUCVXaZ+EqJnwvFNxQQ5eYRhjGIMqIiCZ+fTCtk7sxCnUeDesqcrhv3ztnR99dWRs1LcWBVFSIZkqpQXjmQF8uvUfk65Qqq/IWvKAhL8EE1Dy/OMLss5NHphkTXAijszsjba7i55F1KJhxgxLj36T/8gPqCYUOLGHrDZ/jxtALaa1toqA64POdfAKBjRwNyf7nuUm2t0hbhmwAvtwt+Ti4+AUY/wXHQpHVgOZUW2gJLt6u6MWn2acbOrEP7EDmGbFDRrbuih9CebicKM2zZdori/lokXkhXbYBP7XUc8e9jjX57Nj7fSLB/F9Hh/cR1HxIePaTPIwQH9+Gl6mg7E/CtLwjDrjLE2vXqW7VO0la/EShoKMgTtISyR3PclHpcZy0efBmRFtDlnxMeWG5xw7jb+WREeSzJ8VYyTRHputOEDU201TYRtkekakIGzwqY+odYqhtizdPy+ro+bHzten6/+susX3klq5ddybrnejFj8mVk9LS2NzYQn2lmQ0WKn96bYeFuxMW9IAC36CT/jkCs+wbqFy1Hs5pbFnDz7IA9jR0OGlPqwviaYYH2gIw+HfHOd6QKHt0KInIVom63Fl6A7gS/2qlLzrmKWuv9E64ud8SSNyGQ5MRQnvwbsvXEWQdL9sbyxCMniE4e1f7eqJ4iNBLEmra278HfKGDt0kL2vZNm9xtpxqw/a6vK/EcAnGJnov9J8LULopmKq8AESK6vFWYx2g0lEdOzKEbcmebccUkAzHkLefCeen424wiNWw9yqqqGxu01HN9+gtotNTwwt5miOciAJdbtzTkILgkA53H+DmThLuTx5y3zf2N5bIVlwaqYxRWWh/58Lu1O/yO5ZAA+climIBbr+V6gzwVaL4/uvnBwZ3PJATinn0b+6wA+Ccw/AAAA//84J79PAAAABklEQVQDAKgTUm4CWjQkAAAAAElFTkSuQmCC',
 sound:'data:image/png;base64,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',
 mode:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEQklEQVR4AexUXWwUZRQ9M91tt7Br61pU1laJEoNEJGpEUk01vhDQF+UBMFEhUR81MUZNfPONRBuMJgZf9EUhVmyCUlQgYfnrFihdIJTyX9plaSnd7rbb3ZkuM8Oc236TbguBQgiEdJLz/Z97ztzvzui4y8+0gekMTGfg3s2ANRJ1BIW446TWCG72l2G5HIK87G8RZ+OaGc71uNfMAMl69lcQ2P8uzKMx4XOdQa29853z60LOibVhgRF9Rgwqw/rQ9yCGt/6HCwkDCxcEcD0T1zRAsn28BYTV2w49k5Ax1xn09J4eGKYfgbICnlj8CMoWLIYd+lQM5/9YJobJpTid6wWICY4nYpIBOuUbi/AL38C/9E/4HoogtvkCKK6Czn31UTFxPtYr68pc+ZxK+Gs3AIt+B89cTlmiSROMLZNxTZEBHljxdh5XEhkRlnMt66EN6nipLoDDR4ZlSTWPVQcQDJZImmnOV10hwtzX9q+APuig9vUIlInn502+iiIDpgl0nQ2SL3AOfQ3kEyjYKVw8lZM1NhTOd6Yxc+kSVFT6URX2iQka5z7Fadqc4cY7keCSB2p4E3dQZCBnOMjZfglG8e4DSXS5ASj+/04D8ZMmKM43pTjvnb0x4iBYUYr+viEU9q2C4vW2JUDeXwcyrhTw5Gs1oIZMxhrPANP/4RdPY25tjWw1b+5B4qIuYJCOwQIOdhrQA6Ve0cEZDcwsBEps4bU2JYVDruKlBkbFh4ezeOPl8qIvwjPA1JyNduNSa1KcVoVLJCDdU3zPMQ1frQxDryr3io6fKe9eDrqNzx/AnMdL3REwnvfD5xHAyiFUtwll8ypALTnkNp4BpobF0tk1IiY4pomPl4RB1K9+QIqJb5hJF8REatMWcMziNCwvlFsTJcL5bPks7KifjbKnZkFf1ABmrGZZY9E1CIvpf2/5g6j98h0sfG4mHn4xIkFoQgHu033J/aChI+5+DdFdaWzbl5Vx2jXUec6UMffco2KWPWGe6YPd+gHsQ59ITy1qck8MMCUsJju4WipbXUP17NF7ZU/xlb/ktFfWDmhvrs8JOFfj8ettHQbIYTbVf4PXSyMEM0ZNzwDTzwlBE5FVb8k18E7bk0NoPmyBYty/GfAsOeTyq6EJZpI9+bxapSkZyNh5uVMWFaEKqynWj5AvMCVxChA0Qe6Gf3vkOiiqTNAUzxBiIN6hSzFRmGBhZbMW6p6tLKpYEqYCpnl+JASK84/JnuLMRLTdlFBiYGOHrX30bT9+bEjKT0h2xhqVqrHplDpylShfiCYo/n79AKjJYGKAg6ZzttaXBhqbU5zKP357LIe/20adyuIUG3IZj6IUp4mft6bQ0utoKpRngAvf7YTW0w/UN/QJtsRHQGPcuxWQ29isgaKM+dM/KVBjfKwiA9xYtxsaDxEMwLXbAd+WsQjGnhhrkoGJB+70fNrA/Z+BG9XQVQAAAP//IIGH6AAAAAZJREFUAwDBKKdfVF+THgAAAABJRU5ErkJggg==',
 multi:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADLklEQVR4AdxWv2sUQRh9s5u7IGhnKQgWFhaSykYb/R9sUlkr/iKJwZDCQq8xwQR7SaOVFoKFhSj+QIUoBIMRJUSENMFwOe4S493e7jhvvFn2dnb2NnhByLJv58f3zffe927vOA//+do7Ai4e82QWehncFwdIfOfDAojZFzdBzDwfxczjM2AsT8Q/CyABib3GExBS1hBFvyGq7zTv7MOTuSJ6CiBBFlid+4aca5KLsAkR1gB/AAID3MbUg+NOEbkCDAFJaKvGo1OYVWBMV+88NPnGPFBfhNhcggwDoLXViboHpwASkJi2ErQV1adxJXbFBWMcBck5gQRkoLr31Uoo5N+ZApLkPK7JOSE8FgZK5QPa2sunJ7H2ZQ4QHmQUQcoQ6iUAwm3I9i/0urxeCdra6kt4tTeAKENbC/uSsg2hGiagRviDEKV9kKVBOzmxkymgGcn4jYZnCnSsVZ0mzsfTv8ShcqBtiSyvfI7z0pNMAb7qgJ2juqC+Tm/1GUlr+fnqlf2QfgmQQjXvQ3CuUti9XJrHpckQd5ciobasO1NAEAFi45Uq1tAdCXWUQPJKbFTOL6O9tY6g1YgzNPnX97h6veEkZ3KmgEP7JYKm+jHx29A8ItRCeMAgaNZhrGV3E+cWQIwNvwZx7ewzjE9u5pKzVqaAGx8hRoc/obUdQL/RHWuVCp5R4urwf3zX1pbLEUaGoF4QHbIejBFWoLORKYAxdkURtJXgHsHO/dVlbS3JR2eO4vb9E7mozA05RToFkIwiaCtBWwnOaS3JmVMUlRFkinAKGFG2EkUJXHlB0IK/tqrDWSIyBZD4VuUgiDx7ae3UlW9Y+1nT0CzqQVKD0lZd7bhvS4Ah55Hy4SMccsGuKIJJSVISE9zPQ5eAnZCTLGktRSwvrqIIaVJQlwAG2DXBeRokNdgpUbqWWVsCTICjITMjSQ0Y7wcsAYaMoyEzYz8I0zUsAYaMYzp5N9aWgN0gyavZVwH3ptcxdmHFwvj4OiamoZEW4xQgfWcoXSNeT6u/D0UQH1ATJ4sI1Z8ClbDbtyUgy0LXXp61RYV3CShiX15OUdJkXpeAZKBf8151/gAAAP//V0VKqwAAAAZJREFUAwB7IwhfA1pyJwAAAABJRU5ErkJggg==',
 collab:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFhUlEQVR4AexWa2yTVRh+ztd22HXdmEYYSmSJInIRQXQZRmI0XogS1Bk1geEGYzDikMHGxtqNjrVzzABT+YFzETWGCYgxGILBREMElCxouF8m4To3GJTu0tL19h3Pe7qvazcGLP7QGL70ec85z3nP+z7n/c5pq+Bffu4I+G9WoDoNPBr/9JhEx6J+dLyYCtAkofiXYyje9SVKts2XvsTJTh9TOp5xDQP5zHoYvLhuHIrrJgtMwdICHaJ9YwRQfEpOrYbCsqFaN6alxETYP44DgfrRgWlMMDOAjSoHS3le4DlccwEuJkiEn4gAWnyjZLoJL4F4mo8GJa1s3Av2+KdQRr6A4o3TULx8iNwd+V3dbOa+78x8w/czwI2jwU3TZMaUjGV48hFIPyIiAmige3EfNYD3AFjXHtlXnIdlSyIInR6G5bv3A+m7oXN+Dtb2jZyXZmyaFLK8bhLufiYPhvQ88JRsOQXDfRERGVkjYDaGaSmAFFPwMAWZnHeeAkFVu6G6PDi+vwu20g5UNu4DYwlQnJ8B53cBbYckmOscNChuJ+iRu45LpS4QaAm3PTY7R5FVkAKIi949jSPw+HDylIot21VJKWoH2JUPRZXOgF9qi4F0iDLMI6pIiQmCl2PR0keflIgzHUBEAJFa6Wnnckym2yOTO3Y8C8feL8QuvwXO7gDaz6Gswh+BqmPk3YvTmwEBSqqBJvmln6kBCZh8P3oFsLZa0HuPJG85ARD0BrkgGOoQO98C3rQTvtOXYZ13FulPACvydbAuEajsRk3hRXT+fhGq2y0q5EWovQv8xKYwRGItuQzo9aI7wHoFqG2/yXcO8ahnjwgLqL4gmNGIqk9GouLVP2B9/QeULWlF5TrAks8wfWYiEqZNhfGpqahem4JFs4Caeobyonb4m5xQTPEyjjSuVnH/eiAI/9XrCKo8LKC0EWzpvOM40vCrhHVVJ0ot14QbwrtIToVjy9NSiGVFHBx1qTBNTIV+zETpI83w0UhIewhV9aPkcNUGoGxxq4Qkesx6SwsIq9Z4EApEvYL1hzmr2qyi4UeO1VtnoiSHIWtZe8+ycMOFkPjJacDQkeBJ4gWG6YhVjIlQ4xLx/qYxEbz9hl6KIDGaY8F+sJpDYLTxmENo0HFUb58u/ZLTHpVt7epYEZIcwKhQwXQGWGafkiC3xzIehL0mEZqQy12M6AhiBBCrNB+FeqERa947iEnDgJxMHdYu3ENTNwU/fxQV8w9CcTfBsTZZJrTlnETwTDO4P4Sx43Ww5vcPESOg4U+wknebYSm6hMKtL6Poq9egVYJEEPqG4C2HQYBBxcpys7gRbnH4ApiQFo+V9mTYHB7Yq9yYW96NBbWiwsd4TAliBFDwDw6orLlTRXQliC/8ejEKSoaiNm+PTEhJCTT3Tr64ogYTlHgFb83QSxG6JBU6cxC2kiHIeCV8lRuaEJOc1vYTQCQ5zp5zAeus4a/Pgvop4Jd/AldUmu6HmiIT5iwk37swLt2MRXnxUgQ5Bq75UL81CIpJ4764oQByogUHrwAE5fp1ML0RimKAT3x5VFrFb4IA9zEQUkaEd6gkqNCbGIYP08lK5Oe6UfIR4BL3nWLeCAMKIGcSQa3/xGmoJ48iq8AJnwhWXjEEubkmOOy9N4SqkJl9BZm5TnBvNx5ICiL3TUUm1+JQrL64qQBypsXz7QFk2Xw0RFm5+IMS0GP4PSpsq03IKmxHyB3CvWYFJIKcZpf6sWA9h2VjaMDSkx/hlgLIiUQQqM87OuB3+ZBd6kVmnocozLN1wdXkgb7VK8fbxC8zYedf/Q+ddIgytyVA8ycRc+0cudVBSdFYdoQp3KSCEM0J+pafQQmgaJRAQ98x8cQNBoMWMJjgt+N7R8D/vwK3Ogd/AwAA///FH2IpAAAABklEQVQDAGkeel/I8ICEAAAAAElFTkSuQmCC',
 funny:'data:image/png;base64,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',
 innovation:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACX0lEQVR4AdTUv2tTURQH8O+5SWPtJlU7uSriYCm4uIjgpIIFcVBwcOigm+B/oIuzipsoiF0cdXBxsGDTFuuPgkVsp1bFWoslmJjXvHc839fcDOG2ScSkySUfknfefcn3nLzEYYdXbwSofBpTLy7llbT0VClZuaGp+ZOamOj5kHrNDLe7J1ApTinJgSvwHJZBWsiDal0OHgNM9uhpeMmbQ0q1PYEX3TmBpPhaKSNLICdf4Wk0hZQI1ABZ68uIA4zGETwMDttUhhFPH1RCYNlVgWoHS90ZQGzklI6aI6/ecLzptOxAAgdKoCDYMYnrs29ikyK2szGkbyCFwHKBWkdLwQC+c5QVKesVVYKivSrCLxGA4HIg1T/wJNMP0sRqBoEVDBDY17ZSMICuL4NEf4OgG/DiyQcg+z+2n1upVq+8vA2CJlbbpOVVu19WgbVvmwJtBAME9rWtFAxQnhoH6do8CIl1VJUZOQfCq/ugwou7oOzxUZC43aj5tQAxcdQPCnURDBDa2K5adwYYuAChZOUzCD/foia3BzAbdl9SfzYDQt8+pNY/AlU/phdBuTPfhUJTdKFiJ2vbBsie+CK0OvkOnlQiUBwDFJVjEFCy3CVU5j7UDF1TITux5WPbAFte9R9PNBVg/1hBvOkneVB+AqDZGSD1eAKzJnexLF4zOZsK0Mwb/euelgM8ezQHmpvZAM2/j0B3Hi6CWg3ScoBWP6DR/t4LcGnUga7e3AU6f9aBLh+JQY06rj/fexM4fCsRKixEoOWlBHRqPBGq77DRce9NwHe097oKjdyDkK/XPzc6/gsAAP//ullPRAAAAAZJREFUAwDtNHxQWfTYyQAAAABJRU5ErkJggg==',
 visuals:'data:image/png;base64,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',
 mechanics:'data:image/png;base64,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',
 modded:'data:image/png;base64,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',
 vanilla:'data:image/png;base64,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'
};
export const iconOf=n=>imgOk(n.img)?n.img:(ICONS[n.id]||'');
export const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const imgOk=u=>/^(https?:\/\/|data:image\/(jpeg|png|webp);base64,)/i.test(u||'');
const safeUrl=u=>/^https?:\/\//i.test(u)?esc(u):'#';
export async function getNoms(){
  if(!ready)return DEFAULT;
  try{const s=await FS.getDocs(FS.query(FS.collection(db,'nominations'),FS.orderBy('order')));
    const l=s.docs.map(d=>({id:d.id,...d.data()}));return l.length?l:DEFAULT}catch(e){return DEFAULT}
}
async function getEntries(){
  if(!ready)return[];
  try{return (await FS.getDocs(FS.collection(db,'entries'))).docs.map(d=>({id:d.id,...d.data()}))}catch(e){return[]}
}
const END=new Date('2026-12-01T00:00:00');
const $=s=>document.querySelector(s);
const page=document.body.dataset.page;
const hid=s=>{let x=0;for(const c of String(s))x=(x*31+c.charCodeAt(0))>>>0;return x.toString(36)};
// звуки: синтезируются в браузере (WebAudio), файлов не нужно
let snd=true;try{snd=localStorage.getItem('mp-snd')!=='0'}catch(e){}
let AC=null;
const SFX={click:[[260,.05,'square',0],[180,.06,'square',.05]],tick:[[880,.025,'square',0]],pop:[[600,.05,'triangle',0],[900,.08,'triangle',.05]],ok:[[523,.1,'triangle',0],[659,.1,'triangle',.1],[784,.1,'triangle',.2],[1047,.25,'triangle',.3]],err:[[120,.25,'sawtooth',0]]};
function synth(k){try{AC=AC||new(window.AudioContext||window.webkitAudioContext)();if(AC.state==='suspended')AC.resume();const t0=AC.currentTime;for(const [f,d,w,s] of SFX[k]){const o=AC.createOscillator(),g=AC.createGain();o.type=w;o.frequency.value=f;g.gain.setValueAtTime(k==='tick'?.02:.07,t0+s);g.gain.exponentialRampToValueAtTime(.0001,t0+s+d);o.connect(g);g.connect(AC.destination);o.start(t0+s);o.stop(t0+s+d+.02)}}catch(e){}}
// если в папке sounds/ лежат click.ogg, tick.ogg, pop.ogg, ok.ogg, err.ogg, играют они; чего нет, то синтезируется
const AUD={};
for(const k of Object.keys(SFX)){try{const a=new Audio('sounds/'+k+'.ogg');a.preload='auto';a.addEventListener('error',()=>{AUD[k]=false});a.addEventListener('canplaythrough',()=>{AUD[k]=a},{once:true});a.load()}catch(e){AUD[k]=false}}
export function sfx(k){if(!snd)return;const a=AUD[k];if(a){try{const c=a.cloneNode();c.volume=k==='tick'?.3:.7;const p=c.play();if(p&&p.catch)p.catch(()=>synth(k));return}catch(e){}}synth(k)}

// масштаб сайта
let sc=100;try{sc=+localStorage.getItem('mlay-scale')||100}catch(e){}
function setScale(v){sc=Math.min(130,Math.max(80,v));document.documentElement.style.fontSize=sc+'%';
  const l=$('#sv');if(l)l.textContent=sc+'%';try{localStorage.setItem('mlay-scale',sc)}catch(e){}}
setScale(sc);

const links=[['index.html','Главная','home'],['nominations.html','Номинации','nominations'],['apply.html','Подать заявку','apply'],['rules.html','Правила','rules']];
const cur=page==='nomination'?'nominations':page;
document.body.insertAdjacentHTML('afterbegin',`<header><a class="logo" href="index.html">МапПремия</a><nav>${links.map(l=>`<a href="${l[0]}"${l[2]===cur?' class="on"':''}>${l[1]}</a>`).join('')}</nav>
<div class="hset"><div class="scale" role="group" aria-label="Масштаб сайта"><button id="sm" aria-label="Уменьшить">-</button><button id="sv" title="Сбросить масштаб">100%</button><button id="sp" aria-label="Увеличить">+</button></div><button class="btn ghost sndbtn" id="snd"></button></div></header>`);
$('#sm').onclick=()=>setScale(sc-10);$('#sp').onclick=()=>setScale(sc+10);$('#sv').onclick=()=>setScale(100);setScale(sc);
const sb=$('#snd'),lbl=()=>sb.textContent=snd?'Звук: вкл':'Звук: выкл';lbl();
sb.onclick=()=>{snd=!snd;try{localStorage.setItem('mp-snd',snd?'1':'0')}catch(e){}lbl();sfx('pop')};
let lastH=null;
document.addEventListener('click',e=>{const t=e.target.closest('a,button,label');if(t&&t.id!=='snd')sfx(t.classList.contains('sh')?'pop':'click')},true);
document.addEventListener('mouseover',e=>{const t=e.target.closest('.nom,.card,nav a,.btn');if(t&&t!==lastH)sfx('tick');lastH=t});
// пиксельные эффекты: взрыв частиц и штамп по центру
const REDUCE=matchMedia('(prefers-reduced-motion:reduce)').matches;
const PXC=['#ffc83d','#fff3b0','#ffe14d','#d9921a','#ffffff'];
// частицы на одном canvas: быстро, с физикой, квадраты по сетке 2px
let cv,cx,parts=[],raf=0,lastT=0;const MAXP=matchMedia('(max-width:700px)').matches?160:400;
const MOB=matchMedia('(max-width:700px)').matches;
const dpr=Math.min(devicePixelRatio||1,MOB?1.5:2);
const fit=()=>{if(!cv)return;cv.width=innerWidth*dpr;cv.height=innerHeight*dpr;cx.setTransform(dpr,0,0,dpr,0,0)};
const ensureCv=()=>{if(cv)return;cv=document.createElement('canvas');cv.className='pxcv';cv.setAttribute('aria-hidden','true');document.body.appendChild(cv);cx=cv.getContext('2d');fit();addEventListener('resize',fit)};
const snap=v=>Math.round(v/2)*2;
const loop=t=>{
  const dt=Math.min((t-lastT)/1000||.016,.05);lastT=t;
  cx.clearRect(0,0,innerWidth,innerHeight);
  parts=parts.filter(p=>(p.life-=dt)>0);
  for(const p of parts){
    p.vy+=p.g*dt;p.x+=p.vx*dt;p.y+=p.vy*dt;
    const k=p.life/p.max;
    if(k<.35&&((p.life*24|0)&1))continue; // мигание перед исчезновением
    cx.fillStyle=p.c;cx.fillRect(snap(p.x),snap(p.y),p.s,p.s);
  }
  raf=parts.length?requestAnimationFrame(loop):0;
  if(!raf)cx.clearRect(0,0,innerWidth,innerHeight);
};
const add=p=>{if(parts.length>MAXP)return;parts.push(p);if(!raf){lastT=performance.now();raf=requestAnimationFrame(loop)}};
const pick=()=>PXC[Math.random()*PXC.length|0];
const burst=(x,y,n=16,spread=90)=>{
  if(REDUCE)return;ensureCv();
  if(MOB)n=Math.ceil(n*.6);
  for(let i=0;i<n;i++){
    const a=Math.random()*Math.PI*2,v=spread*(3+Math.random()*4),l=.45+Math.random()*.4;
    add({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-spread*1.2,g:900,s:[4,6,8][Math.random()*3|0],c:pick(),life:l,max:l});
  }
};
// кольцо из квадратиков при нажатии
const ring=(x,y,n=14,r=10,v=170)=>{
  if(REDUCE)return;ensureCv();if(MOB)n=10;
  for(let i=0;i<n;i++){
    const a=i/n*Math.PI*2,l=.4+Math.random()*.12;
    add({x:x+Math.cos(a)*r,y:y+Math.sin(a)*r,vx:Math.cos(a)*v,vy:Math.sin(a)*v,g:0,s:4,c:pick(),life:l,max:l});
  }
};
// мелкие кубики на штампе: вылетают из случайных мест экрана к центру штампа
const confetti=(n=46)=>{
  if(REDUCE)return;ensureCv();if(MOB)n=Math.ceil(n*.5);
  const cxm=innerWidth/2,cym=innerHeight*.42;
  for(let i=0;i<n;i++){
    const x=Math.random()*innerWidth,y=Math.random()*innerHeight,l=.7+Math.random()*.6;
    const dx=cxm-x,dy=cym-y,d=Math.hypot(dx,dy)||1,v=130+Math.random()*180,sw=(Math.random()-.5)*160;
    add({x,y,vx:dx/d*v-dy/d*sw,vy:dy/d*v+dx/d*sw,g:60,s:[2,4][Math.random()*2|0],c:pick(),life:l,max:l});
  }
};
const stamp=text=>{
  const d=document.createElement('div');d.className='pxstamp';d.innerHTML=`<img src="${ICONS.best}" alt=""><b>${esc(text)}</b>`;
  document.body.appendChild(d);setTimeout(()=>d.remove(),1500);
  burst(innerWidth/2,innerHeight*.42,26,110);confetti(46);
};
// нажатие на кнопки и плитки: небольшой взрыв и кольцо
document.addEventListener('click',e=>{const b=e.target.closest('.btn,.pager button,.ncard');if(b&&!b.disabled){burst(e.clientX,e.clientY,8,40);ring(e.clientX,e.clientY)}});
// золотые искры на фоне
if(!REDUCE){
  const em=document.createElement('div');em.className='embers';em.setAttribute('aria-hidden','true');
  em.innerHTML=Array.from({length:innerWidth>800?18:6},()=>{const z=[4,6,8][Math.random()*3|0];return `<i style="left:${Math.random()*100}%;width:${z}px;height:${z}px;animation-duration:${9+Math.random()*9}s;animation-delay:-${Math.random()*14}s;--dx:${Math.round(Math.random()*80-40)}px;background:${PXC[Math.random()*3|0]}"></i>`}).join('');
  document.body.appendChild(em);
}
const ask=(title,text,ok='Да',no='Отмена')=>new Promise(done=>{
  const m=document.createElement('div');m.className='mdl';
  m.innerHTML=`<div class="acard" role="dialog" aria-modal="true"><b>${esc(title)}</b><p>${esc(text)}</p><div class="bar"><button class="btn" id="ay" type="button">${esc(ok)}</button><button class="btn ghost" id="an" type="button">${esc(no)}</button></div></div>`;
  document.body.appendChild(m);
  const end=v=>{document.removeEventListener('keydown',kd);m.remove();done(v)};
  const kd=e=>{if(e.key==='Escape')end(false)};
  document.addEventListener('keydown',kd);
  m.querySelector('#ay').onclick=()=>{sfx('click');end(true)};m.querySelector('#an').onclick=()=>end(false);
  m.addEventListener('click',e=>{if(e.target===m)end(false)});
  m.querySelector('#ay').focus();
});
const toast=m=>{let t=$('#toast');if(!t){document.body.insertAdjacentHTML('beforeend','<div id="toast" role="status"></div>');t=$('#toast')}t.textContent=m;t.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove('on'),2200)};
document.body.insertAdjacentHTML('beforeend',`<footer><div class="fcon"><span>Связь с организаторами:</span><a href="https://t.me/mdlstudio" target="_blank" rel="noopener noreferrer">Telegram · mdlstudio</a><a href="https://t.me/qwer_team" target="_blank" rel="noopener noreferrer">Telegram · qwer_team</a></div>МапПремия · Премия лучших майнкрафт карт · Текст-заглушка для футера · <a href="admin.html">Управление</a></footer><div id="timer"><i></i>Текст-заглушка этапа: <b id="tl">—</b></div>`);
function tick(){const d=END-new Date();$('#tl').textContent=d>0?`${Math.floor(d/864e5)} д ${Math.floor(d%864e5/36e5)} ч`:'завершён'}
tick();setInterval(tick,6e4);

if(page==='nominations'){
  const [noms0,ent]=await Promise.all([getNoms(),getEntries()]);
  document.documentElement.classList.add('snap');
  const perNow=()=>innerWidth>800?3:innerWidth>520?2:1;
  const tile=n=>{const ic=iconOf(n);return `<a class="nom" data-fx="${esc(n.id)}" style="--c:${esc(n.c)}" href="nomination.html?id=${encodeURIComponent(n.id)}"><span class="go">→</span>${ic?`<img class="ico" src="${esc(ic)}" alt="" onerror="this.remove()">`:''}<h3>${esc(n.t)}</h3><small>${ent.filter(e=>(e.noms||[]).includes(n.id)).length} участников</small></a>`};
  let cur=noms0,lastPer=perNow(),io;
  // номинации листаются «страницами»: по три в ряд, следующие три ниже
  const draw=noms=>{
    cur=noms;const per=perNow(),pages=[];
    for(let i=0;i<noms.length;i+=per)pages.push(noms.slice(i,i+per));
    $('#noms').innerHTML=pages.map((p,i)=>`<section class="npage${p.length<per?' part':''}" id="pg${i+1}" style="--per:${per};--n:${p.length}">${p.map(tile).join('')}</section>`).join('');
    $('#pager').innerHTML=pages.length>1&&innerWidth>800?pages.map((_,i)=>`<button type="button" data-i="${i}" aria-label="Страница ${i+1}" class="${i?'':'on'}">${i+1}</button>`).join(''):'';
    io&&io.disconnect();
    io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const i=[...document.querySelectorAll('.npage')].indexOf(e.target);document.querySelectorAll('#pager button').forEach((b,k)=>b.classList.toggle('on',k===i))}}),{threshold:.55});
    document.querySelectorAll('.npage').forEach(p=>io.observe(p));
  };
  $('#pager').addEventListener('click',e=>{const b=e.target.closest('button');if(b){sfx('click');+b.dataset.i?document.getElementById('pg'+(+b.dataset.i+1)).scrollIntoView({behavior:'smooth'}):scrollTo({top:0,behavior:'smooth'})}});
  addEventListener('resize',()=>{const p=perNow();if(p!==lastPer){lastPer=p;draw(cur)}});
  draw(noms0);
  // картинки и названия обновляются на странице сразу, как только их меняют в админке
  if(ready)try{FS.onSnapshot(FS.query(FS.collection(db,'nominations'),FS.orderBy('order')),sn=>{const l=sn.docs.map(d=>({id:d.id,...d.data()}));if(l.length)draw(l)},()=>{})}catch(e){}
}
if(page==='nomination'){
  const [noms,ent]=await Promise.all([getNoms(),getEntries()]);
  const n=noms.find(x=>x.id===new URLSearchParams(location.search).get('id'))||noms[0];
  document.title=n.t+' — МапПремия';
  $('#nhead').style.setProperty('--c',n.c);$('#grid').style.setProperty('--c',n.c);
  const ic=iconOf(n);
  $('#nhead').innerHTML=`<div class="nbox">${ic?`<img class="nico" src="${esc(ic)}" alt="" onerror="this.remove()">`:''}<div><h2>${esc(n.t)}</h2><p>${esc(n.d)}</p></div></div>`;
  const list=ent.filter(e=>(e.noms||[]).includes(n.id));
  $('#grid').insertAdjacentHTML('beforebegin','<div id="vbar" class="vbar"></div>');
  // голосование: idle (не начато), open, paused, closed; один голос на номинацию
  let st='idle',my=null,u=null,res=null,first=true;
  const MSG={idle:'Голосование ещё не началось.',open:'Голосование идёт. В каждой номинации у тебя один голос, пока голосование идёт, его можно изменить.',paused:'Голосование приостановлено. Скоро продолжим.',closed:'Голосование завершено.'};
  const draw=()=>{
    const cnt=st==='closed'&&res&&res.counts?res.counts:null;
    const top=cnt?Math.max(0,...list.map(e=>cnt[e.id]||0)):0;
    $('#vbar').innerHTML='<b>'+MSG[st]+'</b>'+(st==='open'&&ready&&!u?'<button class="btn" id="vin" type="button">Войти через Google</button>':'')+(st==='open'&&my?'<span class="vmine">Ты уже проголосовал в этой номинации</span>':'');
    const vin=$('#vin');if(vin)vin.onclick=()=>AU.signInWithPopup(auth,new AU.GoogleAuthProvider()).catch(()=>{});
    const vbtn=e=>{if(st==='open'){if(my===e.id)return '<button class="btn ghost" disabled>Твой голос</button>';return `<button class="btn vt" data-id="${esc(e.id)}">${my?'Отдать голос сюда':'Голосовать'}</button>`}
      return st==='paused'?'<button class="btn ghost" disabled>Пауза</button>':''};
    const arr=cnt?[...list].sort((x,y)=>(cnt[y.id]||0)-(cnt[x.id]||0)):list;
    $('#grid').innerHTML=arr.length?arr.map(e=>{const win=cnt&&top>0&&(cnt[e.id]||0)===top;return `<div class="card${win?' win':''}" id="e-${hid(e.id)}"><a class="img" href="${safeUrl(e.link)}" target="_blank" rel="noopener">${imgOk(e.img)?`<img src="${esc(e.img)}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">`:''}</a><div class="t">${win?'<span class="vbadge">Победитель</span>':''}<b>${esc(e.name)}</b><span>${esc(e.author)}</span>${cnt?`<span class="vcount">Голосов: ${cnt[e.id]||0}</span>`:''}${e.desc?`<p>${esc(e.desc)}</p>`:''}<div class="acts">${vbtn(e)}<a class="btn ghost" href="${safeUrl(e.link)}" target="_blank" rel="noopener">Minecraft Inside</a><button class="btn ghost sh" data-h="${hid(e.id)}">Поделиться</button></div></div></div>`}).join('')
     :'<p class="text">Участников пока нет. Текст-заглушка.</p>';
    const hl=location.hash.startsWith('#e-')&&document.getElementById(location.hash.slice(1));if(hl){hl.classList.add('hl');if(first)hl.scrollIntoView({block:'center'})}
    first=false;
  };
  draw();
  $('#grid').addEventListener('click',async e=>{
    const v=e.target.closest('.vt');
    if(v){
      if(!ready)return;
      if(!u){try{await AU.signInWithPopup(auth,new AU.GoogleAuthProvider())}catch(err){}return}
      if(st!=='open'||my===v.dataset.id)return;
      const en=list.find(x=>x.id===v.dataset.id),prev=my&&list.find(x=>x.id===my);
      if(!en)return;
      const yes=prev?await ask('Изменить голос?','Сейчас твой голос за «'+prev.name+'». Отдать его за «'+en.name+'» в номинации «'+n.t+'»?','Изменить голос','Оставить как есть')
        :await ask('Подтверди голос','Точно ли ты хочешь проголосовать за «'+en.name+'» в номинации «'+n.t+'»? Пока голосование идёт, голос можно изменить.','Да, голосую','Отмена');
      if(!yes)return;
      v.disabled=true;
      try{await FS.setDoc(FS.doc(db,'votes',u.uid+'_'+n.id),{uid:u.uid,nom:n.id,entry:en.id,created:FS.serverTimestamp()});my=en.id;sfx('ok');stamp(prev?'Голос изменён!':'Голос принят!')}
      catch(err){sfx('err');toast('Голос не принят: возможно, голосование уже закрыто или на паузе')}
      try{await loadMy()}catch(err){}draw();return}
    const ex=e.target.closest('a[target=_blank]');
    if(ex){e.preventDefault();if(await ask('Перейти на Minecraft Inside?','Карта откроется на сайте minecraft-inside.ru в новой вкладке.','Перейти','Остаться'))window.open(ex.href,'_blank','noopener');return}
    const b=e.target.closest('.sh');if(!b)return;
    const url=location.origin+location.pathname+'?id='+encodeURIComponent(n.id)+'#e-'+b.dataset.h,name=b.closest('.card').querySelector('b').textContent,text='Голосуй за «'+name+'» в номинации «'+n.t+'» — МапПремия';
    try{if(navigator.share){await navigator.share({title:'МапПремия',text,url});return}}catch(err){if(err&&err.name==='AbortError')return}
    try{await navigator.clipboard.writeText(url);toast('Ссылка скопирована')}catch(err){prompt('Скопируй ссылку:',url)}});
  const loadMy=async()=>{if(!u){my=null;return}const s=await FS.getDocs(FS.query(FS.collection(db,'votes'),FS.where('uid','==',u.uid)));const d=s.docs.map(x=>x.data()).find(x=>x.nom===n.id);my=d?d.entry:null};
  if(ready){
    AU.onAuthStateChanged(auth,async x=>{u=x;my=null;try{await loadMy()}catch(err){}draw()});
    try{FS.onSnapshot(FS.doc(db,'settings','voting'),async s=>{st=(s.exists()&&s.data().status)||'idle';
      if(st==='closed'){if(!res)try{const r=await FS.getDoc(FS.doc(db,'results',n.id));res=r.exists()?r.data():null}catch(err){}}else res=null;
      draw()},()=>{})}catch(err){}
  }
}
if(page==='apply'){
  const noms=await getNoms();
  $('#formNoms').innerHTML=noms.map(n=>{const ic=iconOf(n);return `<label class="ncard"><input type="checkbox" name="noms" value="${esc(n.id)}">${ic?`<img src="${esc(ic)}" alt="" onerror="this.remove()">`:''}<span>${esc(n.t)}</span></label>`}).join('');
  const msg=t=>$('#msg').textContent=t,form=$('#form'),ab=$('#authbox'),done=$('#done');
  $('#dimg').src=ICONS.best;
  const MAXN=5;
  const upd=()=>{const bs=[...form.querySelectorAll('[name=noms]')],k=bs.filter(x=>x.checked).length;
    $('#ncount').textContent='выбрано: '+k+' из '+MAXN;
    bs.forEach(x=>{x.disabled=!x.checked&&k>=MAXN;x.closest('.ncard').classList.toggle('dis',x.disabled)})};
  form.addEventListener('change',e=>{if(e.target.name==='noms')upd()});upd();
  // подсказка под полем ссылки
  const lh=$('#lh'),li=form.elements.link;
  const okHost=v=>{try{return /(^|\.)minecraft-inside\.ru$/.test(new URL(v).hostname)}catch(e){return false}};
  li.addEventListener('input',()=>{const v=li.value.trim();
    if(!v){lh.className='hint';lh.textContent='Только ссылка на карту с minecraft-inside.ru';return}
    const ok=okHost(v);lh.className='hint '+(ok?'ok':'bad');lh.textContent=ok?'Ссылка подходит':'Нужна ссылка на карту на minecraft-inside.ru'});
  const dI=form.elements.desc,dc=$('#dc');dI.addEventListener('input',()=>dc.textContent=dI.value.length+' / 2000');
  if(!ready)ab.innerHTML='<div class="panel auth"><p>Приём заявок ещё не подключён.</p></div>';
  else AU.onAuthStateChanged(auth,u=>{
    form.hidden=!u||!done.hidden;
    if(!u){ab.innerHTML='<div class="panel auth"><h3>Сначала войди</h3><p>Чтобы подать заявку, войди через Google. Так мы защищаемся от спама.</p><button class="btn" id="gin">Войти через Google</button></div>';
      $('#gin').onclick=()=>AU.signInWithPopup(auth,new AU.GoogleAuthProvider()).catch(()=>{});}
    else{ab.innerHTML=`<p class="who">Ты вошёл как <b>${esc(u.email)}</b> <button class="btn ghost" id="gout" type="button">Выйти</button></p>`;$('#gout').onclick=()=>AU.signOut(auth)}
  });
  $('#again').onclick=()=>{done.hidden=true;form.hidden=false;msg('');window.scrollTo({top:0,behavior:'smooth'})};
  form.addEventListener('submit',async e=>{
    e.preventDefault();const f=e.target,fd=new FormData(f),g=(k,m)=>String(fd.get(k)||'').trim().slice(0,m),u=ready&&auth.currentUser;
    if(!u)return msg('Сначала войди через Google.');
    if(!okHost(g('link',500))){sfx('err');return msg('Нужна ссылка на карту на minecraft-inside.ru')}
    if(!fd.getAll('noms').length){sfx('err');return msg('Выбери хотя бы одну номинацию (максимум 5).')}
    const b=f.querySelector('button[type=submit]');b.disabled=true;b.textContent='Отправляю…';msg('');
    const data={name:g('name',200),author:g('author',200),version:g('version',50),link:g('link',500),date:g('date',20),
      noms:fd.getAll('noms').slice(0,5),media:g('media',2000),desc:g('desc',2000),contact:g('contact',200),
      uid:u.uid,email:u.email,status:'new',created:FS.serverTimestamp()};
    // не больше 5 заявок с одного аккаунта: id = uid_1 ... uid_5, занятые слоты база отклоняет
    let ok=false;
    for(let i=1;i<=5&&!ok;i++){try{await FS.setDoc(FS.doc(db,'applications',u.uid+'_'+i),data);ok=true}catch(err){}}
    if(ok){sfx('ok');stamp('Заявка отправлена!');f.reset();upd();dc.textContent='0 / 2000';lh.className='hint';lh.textContent='Только ссылка на карту с minecraft-inside.ru';f.hidden=true;done.hidden=false;window.scrollTo({top:0,behavior:'smooth'})}
    else sfx('err'),msg('Не удалось отправить заявку. Возможно, ты уже подал максимум (5 заявок с одного аккаунта).');
    b.disabled=false;b.textContent='Отправить заявку';
  });
}

if(page==='home'){
  const [noms,ent]=await Promise.all([getNoms(),getEntries()]);
  const authors=new Set(ent.map(e=>String(e.author||'').trim().toLowerCase()).filter(Boolean)).size;
  const items=[[noms.length,'номинаций'],[ent.length,'карт'],[authors,'авторов']].filter(x=>x[0]>0);
  $('#stats').innerHTML=items.map(([v,l])=>`<div><b data-v="${v}">0</b><span>${l}</span></div>`).join('');
  const still=matchMedia('(prefers-reduced-motion:reduce)').matches;
  const io=new IntersectionObserver(es=>es.forEach(x=>{
    if(!x.isIntersecting)return;io.unobserve(x.target);
    const el=x.target,to=+el.dataset.v,t0=performance.now();
    const f=t=>{const k=still?1:Math.min(1,(t-t0)/1200);el.textContent=Math.round(to*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)};
    requestAnimationFrame(f);
  }),{threshold:.6});
  document.querySelectorAll('[data-v]').forEach(e=>io.observe(e));
}

// блоки появляются «пикселями», когда попадают на экран
if(!REDUCE){
  const rio=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){rio.unobserve(x.target);x.target.classList.add('rv-in')}}),{threshold:.12});
  document.querySelectorAll('.npage,.card,.panel,.stats>div,.ahero').forEach((el,i)=>{el.classList.add('rv');el.style.setProperty('--rd',(i%6)*60+'ms');rio.observe(el)});
}
document.getElementById('load')?.classList.add('done');setTimeout(()=>document.getElementById('load')?.remove(),500);
