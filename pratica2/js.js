function checkCashRegister(price, cash, cid) {
    let troco = cash - price
    let trocado = 0
    let moeda = ''
    let valoresMoedas = {
      PENNY: 0,
      NICKEL: 0,
      DIME: 0,
      QUARTER: 0,
      ONE: 0,
      FIVE: 0,
      TEN: 0,
      TWENTY: 0,
      HUNDRED: 0
    }
    // let penny=0;let nickel=0;let dime=0;let quarter=0;
    // let one=0;let five=0;let ten=0;let twenty=0;let hundred=0;
    let obj = {
      status: 'OPEN',
      change: []
    }
    if(troco <= 0.05)
      moeda = 'PENNY'
    else if(troco <= 0.1)
      moeda = 'NICKEL'
    else if(troco <= 0.25)
      moeda = 'DIME'
    else if(troco <= 1)
      moeda = 'QUARTER'
    else if(troco < 5)
      moeda = 'ONE'
    else if(troco < 10)
      moeda = 'FIVE'
    else if(troco < 20)
      moeda = 'TEN'
    else if(troco < 100)
      moeda = 'TWENTY'
    else{
      moeda = 'ONE HUNDRED'
    }

  let pegarDoCaixa = (moeda)=>{
    let cidM = 0
    let valor = 0.01
    if(moeda == 'PENNY'){
      cidM = 0
      valor = 0.01
    }else if(moeda == 'NICKEL'){
      cidM = 1
      valor = 0.05
    }else if(moeda == 'DIME'){
      cidM = 2
      valor = 0.1
    }else if(moeda == 'QUARTER'){
      cidM = 3
      valor = 0.25
    }else if(moeda == 'ONE'){
      cidM = 4
      valor = 1
    }else if(moeda == 'FIVE'){
      cidM = 5
      valor = 5
    }else if(moeda == 'TEN'){
      cidM = 6
      valor = 10
    }else if(moeda == 'TWENTY'){
      cidM = 7
      valor = 20
    }else if(moeda == 'ONE HUNDRED'){
      cidM = 8
      valor = 100
    }
      console.log(valor ,trocado+valor, troco)
    if(cid[cidM][1] > 0 && trocado+valor <= troco){
      cid[cidM][1] -= valor
      trocado += valor
      valoresMoedas[cid[cidM][0]] += valor
      pegarDoCaixa(cid[cidM][0])
    }else if(cid[cidM][1] == 0 && trocado != troco || trocado+valor >= troco){
      obj.change.push([cid[cidM][0],valoresMoedas[cid[cidM][0]]])
      if(cidM != 0){
        pegarDoCaixa(cid[cidM-1][0])
      }
    }
  }

    // if(moeda == 'ONE'){
    //     if(cid[4][0] == 'ONE' && cid[4][1] > 0 && trocado+1 < troco){
    //       cid[4][1] -= 1
    //       trocado += 1
    //       one += 1
    //       pegarDoCaixa('ONE')
    //     }else if(cid[4][1] == 0 && trocado != troco || trocado+1 > troco){
    //       obj.change.push([moeda, one])
    //     }
    //   }
    // let pegarDoCaixa = (moeda)=>{
    //   if(moeda == 'QUARTER'){
    //     for(let c in cid){
    //       if(cid[c][0] == 'QUARTER'){
    //         cid[c][1] -= 0.25
    //         trocado += 0.25
    //       }
    //     }
    //   }

    //   if(moeda == 'TWENTY'){
    //     for(let c in cid){
    //       if(cid[c][0] == 'TWENTY' && cid[c][1] > 0){
    //         cid[c][1] -= 20
    //         trocado += 20
    //         obj.change = [[moeda, trocado]]
    //         pegarDoCaixa('TWENTY')
    //         if(cid[c][1] == 0 && trocado != troco){
    //           pegarDoCaixa('TEN')
    //         }
    //       }
    //     }
    //   }
  
    //   if(moeda == 'TEN'){
    //     for(let c in cid){
    //       if(cid[c][0] == 'TEN' && cid[c][1] > 0){
    //         ten += 10
    //         cid[c][1] -= 10
    //         trocado += 10
    //         if(cid[c][1] == 0 && trocado != troco){
    //           obj.change.push([moeda, ten])
    //           pegarDoCaixa('FIVE')
    //         }
    //       }
    //     }
    //   }
    //   if(moeda == 'FIVE'){
    //     if(cid[5][0] == 'FIVE' && cid[5][1] > 0 && trocado+5 < troco){
    //       cid[5][1] -= 5
    //       trocado += 5
    //       five += 5
    //       pegarDoCaixa('FIVE')
    //     }else if(cid[5][1] == 0 && trocado != troco || trocado+5 > troco){
    //       obj.change.push([moeda, five])
    //       pegarDoCaixa('ONE')
    //     }
    //   }
    //   if(moeda == 'ONE'){
    //     if(cid[4][0] == 'ONE' && cid[4][1] > 0 && trocado+1 < troco){
    //       cid[4][1] -= 1
    //       trocado += 1
    //       one += 1
    //       pegarDoCaixa('ONE')
    //     }else if(cid[4][1] == 0 && trocado != troco || trocado+1 > troco){
    //       obj.change.push([moeda, one])
    //     }
    //   }
    //   if(moeda == 'ONE'){
    //     if(cid[4][0] == 'ONE' && cid[4][1] > 0 && trocado+1 < troco){
    //       cid[4][1] -= 1
    //       trocado += 1
    //       one += 1
    //       pegarDoCaixa('ONE')
    //     }else if(cid[4][1] == 0 && trocado != troco || trocado+1 > troco){
    //       obj.change.push([moeda, one])
    //     }
    //   }
    //}
    pegarDoCaixa(moeda)
    console.log(obj)
    return obj
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);