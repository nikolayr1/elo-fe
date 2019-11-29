import {ParticipantModel} from '../models/participant.model';

/**
 * Paticipants array example
 * @type {ParticipantModel[]}
 */
export const participantsMock: ParticipantModel[] = [
    new ParticipantModel(
        'https://image.freepik.com/free-photo/hair-style-street-fashion-beautiful-girl_1139-844.jpg',
        'http://profile.confdsa/wfqwf/id',
        'Dana',
        'Niglich'),
    new ParticipantModel(
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhMVFRUVFRcVFRUVFRUVFRUVFRUXFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQFy0dHR0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0rLS0tLS0tKy0tLS0tLS0tLS0tLf/AABEIALEBHAMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA+EAACAQIDBQQIAwcDBQAAAAAAAQIDEQQFIQYSMUFRYXGBkRMiMqGxwdHwFFJyBzNCYrLC4RUj8TRDU3OC/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIxEAAgICAgIDAAMAAAAAAAAAAAECEQMSITEyQQQTIlFxof/aAAwDAQACEQMRAD8A3cR2CGoIdRxHYKCQAIBBgAC4ACwTQoCQCE7oN0UABjbgNuA9IQkAxp0xuVEliXEAsgyw6GZ4RdCyaEOIBZT1MCuhQbS1aeGpuTScnpGPV/Q1+JkoxbOP7b5p6Ws4p3UdH07kaY42wcuChr1pVJOT1bYKraExe73gVRnWZjlGm3/nQfrYaVruwmi+mvVsmNtq2r7EIVlbJcF0ZJw+IUVw1fH6dwVfWPavv5kJjCrJc6131Fw8F5/IhQmOqp2/IYmib6Nvo/MXTnOnw4flfDwfIhKqh6nibcmBLiaXKMRGb0480+RPzNaGUoV0mpRdmuy3gX1PH+khZ6SQmYSx07IWHXreJNxL0GsLH1h7G8BmV8lbQj6xebvqFRhI+sXdVWgDEzN472g6a0CxftD1OOgy30djp1UOxqIytHOOpIhnCPM2PXeJml3kC5RQzWPUkQzGPUNiXjZahpECGMXUejiUPZE6slAGY1xXpR2LVjgBv0gamgsKFNBNA3kBsYggmHcS2MQkTJimNVXZCAze2WbKhSbfcl1k1w+Hmzjk5ttyerbbb6tmq/aJmfpKypL2YfF8/KxkjqxRpCkwNiooJIWkaCJFF2JVKoyDCaXaLVYZNErE69fKwzPBStw5X8iwytzm9E34Jr4GxyzZidRXlHRrT/gylNRNIwb5OZ1KTXEQdDz3ZOSj6seC5ffExFfAyi2mmOM0wcWuyLGQ8qyX3oMzptcUJsWS0SoY6S6ffiSKGZWfC3wK2wVgJaNnlVVSd0x7HmSy3GypyTXDoaapiFOKkuYzlyY9XYMvh6xcYtWiV+WwLDMPZBmPszFf2iTTjoR5q8ifThoMps0P+kzQn8BUXI26wyD/AAi6HnWexuYj8NNcmKUZo2n4JdBEsvj0EP7TIxqzQ7HHTXU0ssrj0GpZRHoKkP7SmhmclzJEM2ZLnkyGZ5MLUe6As4HYZsiHPJ5Dby6a5BqO4/wWizRDscwj1KN4Sa6iJU5LkFMKgaOONXUUsSupl9+QaxEkHItYmoeI7SrzzNFSpTn+WLf0KmeOa5syW2WbSa9Ffjqy4RcnRMoxirMria7qTlOXGTuxoADvOYNB3CDsAAuTsrwjqSSXUh0abkzoOyGTWtJoictUXGOzNPsps7GEVKS18za0cOkrIrsDokWlOZy3ZUxuthU1qihxWzNNy3t3/k06Ye6DQlNo5zm2xFOadlZ8eBgM+2XqUNbadT0FOkinz3L4zpyTXIqMnEeyl2ecmrCo6lvnuW+jqSj4lTFHUnZm1XA3JWLrLK/Lk9fEq68LWfUkYJ+rpxi9PiUZzVxNplsBzM3oJyaW/BPsX37gs0loI4a5KGPtFnCOiK+gvWLSK0KCR1pQFKAcRSPPPTE7oe6LQaQCG9wLcHbBWALG9wJ00PpBNABHdFCXQRJsCwDsiPCroNTwUehYboW6AWVM8tj0I08pj0L1xG5xQqK2Zk8wyyMYuT5Js5Bm2I36spdp1Db/ADRRoySfq33f/ZN8v0LXvt048kbvq+J0YV7FN2EGEBG5AaAAkYKleSEBcZDgLu7OoZHQtFfevMyOz2Cu0dFy7CWS0OXJK2dC/MSbQgS6aG6dKxJgiaM2xURxBRFjIEyIWP8AZZOZAx/ATHHs5Htdh06rZh5QsdI2mpeszn2LVm12v4nRhfBeZdMTVheC7L+4Tls7TSfB8R2Hs2IVN2ZsYd2ja7L1LOdN8m7D+bsq9nq167f5rPzsv7iyzcRxzVSK3CrXxLNIg4KOpaqJRmzqcBQmIo89HpikxQhDiAAgAaDSAAgWFWAABWABgQAGE0GExiEMi46SUbXtdO9uNlxt7l4ktIy222aKjDvhPw1hcVFI5n+0DM/S1/Rx9mmracLvj8jLDleo5ScnxbuN2OyKpUS+WAAYRQBot8tp2ZXYSneRqMJgXbQmToqCbZf5J+I4UYQX89R/CKLjEwzNaxrQf8q9T5GQlms6CduRX1M/xtXWM5RV7K2mvG3uMVBt8Gs5JdmxntbjqDtViu9xTXnEtMo/aFCcoxqw3W3bej7N+58Dn+XSxVfcUZ+k3pOFlOO8pKN7OEuxO3W3EtMDGMZqNaCTd92SVrtcYyX8Ml0CUaRMak+DslKumPKZncixSkkly0L5cDJMmUaYqdVIy2bbY4OF06l3/KnL3j+0uKfo5QUt26s30XM4/j3h4TablK3S0b+LKgth60rL7Ntq8NOTspNdbfUxePqxlJuPBv6Frh8fhv8Axpdr195V5pOLk3C1uw3gtX0KbbS5E05cO4i1VaQ6paIRW11NTJdlvs9O1aPel70/kaHOUZfI5f7kf1R+a+ZqM3eojmzL9EXAItIkDL4llCI2YezpEZjkZFHTzOPUlUsdHqebsew8bLUWmV8MWuo6sSh7InRku4akR41hxVB2Tqx64Br0gaqjsKHACPSBqYxCgmwnIblMQUHKVjk/7T8w3mo34SaXdb1m/HdXmdIzLFOMXbjwXe+BwzanHelrys/Vg3FeD1fi7mmJXIfSKcFwgHUSAABVgAsMpjqdGyHCpo5xlk7M6bspUvYwzG2L2DNdl1UTste4qMDk04+o46Jp3WklJc+nXidTw1FNCp5bBu7ijNSkhScX2jK7PZNCjNVGruN3FWjCMZSVnKy1k7XV+1jmY5AqtX0u/Gzd5xs9bezKPSS4dqNTDAwXIOrRjYG2+yYtR8SgyDBunNrkauUPVIGFpJSLWa9USQTlbMHtPllSrZRvZ3cmraJcOJzPFZNVpyalCd2t1pw3k5XTTUnouHG+h3PGULmdzHId9Ncb9/xLhPQbip9ujjme4GNLcjFpyUVv2d1vc+8qrnQs/wBmNxN2MBiIbsmjeMlIlx1BGWgmTCTCKJLPJFepHvjbxkkabM5XZmMkf+7H9Ufin8jUY+OoHNm7HMDHQsacdCFg46FjTjoKZzxVyBGlUXJj8a01yZrfwK6Cf9Oj0OCj2vtMxDFS7R6OOkX7yuPQS8pj0FqP7SqpZlJEhZsyVPJ10GZZOLUN4hLNWLWajM8pYzLKpC1Y9ok9Zsh2nmkepTyy6YzLCTXIdMPyaaOYRfMKeNj1M2oTXJkbG1pxQci1iK2qztU6UpJ+tZ7v6novL5HIGy82ox7nPcvpHj3/AHcpEjtxQ1iY5Gr4CAEGamYqEQT4jkIjdTiMRJwhvNksZqkYHBvU02SzcZIxyK0bYn+jseXV7pFvTlcxmS43RGnw9c50yskKZNkivxVazsTHV0KWvUTrWk9FG/i2DM4ossHqy1a0KDDYyMZWui8p100UmKSZCrcRmaJFf2rjVViGjMbTJKnLuOI5r+8fedm2vqpU2cVxs7zfea4fZeTxQygIIUzcyJ+TP/dh3moxrvIyOVytUg+kl8dTX4iHrCObMidhFoWMY6ELDR0RYpEzMMK5N6oh7oqKF2OQ9Ab3Q9wcsCwwG9wS6ZIUQt0AGPRiXSJO6DdFQER0F0ESwyJthLQUOyBLCLoUe0jhRozqy/hi7drfBGnqROVftQzvekqEOEeNubHGNuhps59iKjnNvm2JlwDjoJZ2kCUhUFdgaF0o6N/f3xGIXT18xqfFj1L6jVTiMS7Bh5WZpssd7GVLvKcVYzmuDSDpm+yis0a7CYjRGFy3EcDV0Kul0cclydUuUaCNXQqs8y91I3i7SXBlVmG08MO16RSUX/Futrz5Ao7dYSWik2xpNozSafBUUcqxSlvOTsnz1X+DW4WhiPR2VRX62vbzG8NtHh3ZS03vPxRZ0M3w6WklbroJ2ay3rxJeGpyjBKUnN820l7kN4mdkFLMKbXqzi+5q5Gx1dbtwZgk75MFt9j7Qaucsbu7mo26zHfq7ifDV/JGWOrFGok5ZW/6F2DcQuX399Rd9DQzH8rXr+D/pdjZ1HvNPsv5mOyn95G/5l9+81GCq6Rv+Ve5CMsq4LrDrRE2SImDd7E2txImzDCuWb9ChCYdzlO0WGhKDQwHACQrgAq4QLhXGAYlgcuZWY7MYwi5ydopX0V2+fD6iCit2v2hjhaTd1vS0ivnY4fmGLlVm5y1bLTajO5YqtKVmo3tFN30XC7KhU3/k6McK5Bsba5c/gBR5jyhbtYiS6mxFiGhy1lYTcVL5jAOlz++Q1W4jkOYipxXcALsamO4ao0xuQ5h6dyWUabK8bwNplWOuldnNKKcXc0+SZgk0mc+SPtG+Ofpm0xsoVI7skmn11XiZ6hlmGc7VKcbX6ap8n3dpdUcN6S1nxH47OSlxet+JinRvGaj2PUtn4NKVOvNLppNa/quRcXsfQk3KrUnNvldxWmmkVZe4tKGz9WPsVLdmpMw+W1Iu8nftHsxbxXT/AMRByvZzD0I3jTSl15rxKrbHO44ei9dXpFdXyLvO8fDD0pVKkt2MV59Eu04dtDnM8VVc5aRXsx6Lt7SoQc3bMJT9ldWqucnKTu27sQAB2GApMNPQQKQhkvBaO/Ro0FH4X8rlDgY3uuxffvNBl0d5X++j+QiMi4L/ACdallXepAy3RjmKr+sTVnHtTOjoNDCrClUOQ9Gh9MWmMKYpTAQ82EhHpAKYwHGIbEyqpGT2o2xhh01HWXLW1+4O+hpFvneaU4Lcckrq8rvhHt7znm1OdVMVelh4uNH+KT0lU778I9hmcdnFWvNyqPi72Xu/5YqjiPyp363bZ0QxVyyZS9IVDJpJaq332DU8G+zuXPzJ34ipzT0/Nd+5fNiKuIbVm/dZefM1siiqmo2536f5IFUs8ZHS61KueoxxFRYt8hpi4PX76ANiqfF+HwEtcPIXT4hR+DGIZlyLHKqV0+9NfAgW08CyyapbT71JatDui0lgdExEKVmaf8HePgv8lfWy9pnMpnToWGRZxKnaMuHJm+y/MoTV0zm9DDdSxp03DWLaM21fBThaOmUsTHqR82zelQpyqVJKMYq7b+Ha+w55/q1eKfrWOfbR5vVxFR785SjF6JvRPrbhcuEXIxklElbY7UVMdVvrGlF/7cP7pfzfAzwAHUkkqRnYAWAKS0GAkepR+A0PRdrfeggJOW+1bsf1+hocjqJVVB8Jaf8A0uHnp5mbwrtJFxSldqXS3fpo35WZMh1Z0XBZf8Ctx+Fe+y8yDHxq04y5+zJdJrRrx4+IjMqPr+BKZwThTNCKRQU83XUejmq6nFses8TLxIPdKmOaLqOwzJBsifqZOaG5VN1XbI0sxj1uZTajauNJNJ3nbRLhG/N9vwKXLpBo12L2w2pVBOK1qPRRutO2Tvouzmcxq1ZVJudRtt/dkuQ3OrKpLefFvi9X7x5UrpKK75cW+xHZjx0jGchdKUI/wbz7X8iXHNZxVo7ke6F797Y/l+z7mt6Sdlbrre1kaHL9laUldrXkk73fZ5dDf632c7zwTozUc3qt+2vD1fdp1Dc09XFX6+t/Ua6WxeHqPchVlTqcozs1J2vomQMXsXVg2oTaklwklZ9kZLj5ENNFxyQfJlKqh9tMg1Yq/wDm5b1sFiVfep8Hb2dfcVdWTfJLuf1FyXx6ZDYqm9QTg+nvEPQCiVRjqFBfP4DmHXPs+DEJ6eD96SKIEQjdeBIy6Vpd+gMLHR3/ACv3jMdGOJMuU0ddyWnv0ot8UrPvtxfetR7EYJPkQNlZyUYJu6nFWWq9ZK/Hhrr5GlnBNHBmhpNo6cOTaCZTQwyXILEUtNCynTRGrxSV2ZG9mR2krqlTaXFnO5cTW7T4jfl2LRGSlxO3EqRzTdyCAABoQAVFiQ4jGGLhqu4SgQdmIB+lrpzXAustqbyTXHn3rRlJHR/AsMLNx4cHr9fr4EyQ4umdCyOsoVIr+GtCz/XT0v3uPwLbG1lveBjMFi1uKV9YSUku7jbvQ/i81bk7ExVnP8iNMkUR9BgONnrIkwJFMADMoFbn3fU5ntJ+8feABv8AH7Mc/iRPy/fMsMJ7K7/kAB34+zz8vidCwH7t98v6WWGV+1D9MwAOh+zzn2isz7/qKHh/YazH/wDb7/mABnPpGuMzGce1P9NX+qiYXaj974L+lBAI9nTDoonzI0uIAEG6JmG9lffMbjwfd/cgAKJ9kin7Ph8kM1foAA0T7Om7MfuKf6omrXAADl+X5Ir4nixqZAzb93LuAA5kdiObZt8mZqfEADth0cz7YQQAFiAKQAAAb5hcwAAZIXs+JPw/s+IAAxLsm4P2Zd39oeK9p+HwAAmPZGfxR//Z',
        'http://profile.confdsa/wfqwf/id',
        'Dana',
        'Romain'),
    new ParticipantModel(
        'https://i.pinimg.com/736x/fb/e3/75/fbe37552637081f7bced381c7c464f3b--illustration-girl-girl-illustrations.jpg',
        'http://profile.confdsa/wfqwf/id',
        'Deka',
        'Vellen'),
    new ParticipantModel(
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToz_q977PuTKZIeCDTMTazxdSxFvxo_oYnVxxwULR10r7wtxDpCw',
        'http://profile.confdsa/wfqwf/id',
        'Jella',
        'Kayden'),
];
