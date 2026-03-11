const botaoCalcular = document.getElementById("btn_calcular");

botaoCalcular.addEventListener("click", function(){

    let montanteTotal = 0;
    
    let taxaIr = 0.225;

    let investimentoInicial = Number(document.getElementById("investimento_inicial").value);

    let investimentoMensal = Number(document.getElementById("investimento_mensal").value);

    let taxaSelic = Number(document.getElementById("taxa_selic").value);

    let porcentagemCdi = Number(document.getElementById("porcentagem_cdi").value);
    porcentagemCdi = porcentagemCdi/100;

    let tempoRendimento = Number(document.getElementById("tempo_rendimento").value);

    let tipoTempo = document.getElementById("periodo").value;

    let tempoFinal = tempoRendimento;


    if(tipoTempo === "anual"){
        tempoFinal = tempoFinal * 12;
    }

    let taxaDi = taxaSelic - 0.1;
    
    let rendimentoAnualBruto = taxaDi * porcentagemCdi;

    let taxaMensal = (1 + (rendimentoAnualBruto)/100 ) ** (1/12) - 1;


    let montanteTotalInvestido = investimentoInicial + (investimentoMensal * tempoFinal);

    montanteTotal = investimentoInicial

    for(let i = 0; i < tempoFinal; i++){
        montanteTotal = montanteTotal * (1 + taxaMensal);
        montanteTotal = montanteTotal + investimentoMensal;
    }

    let qtd_dias;
    qtd_dias = tempoFinal * 30

    if (qtd_dias > 720)
        taxaIr = 0.15;
    else if(qtd_dias >= 361)
        taxaIr = 0.175;
    else if(qtd_dias >= 181)
        taxaIr = 0.2;
    else 
        taxaIr = 0.225;

    let rendimentoBruto = montanteTotal - montanteTotalInvestido;

    let rendimentoLiquido = rendimentoBruto * (1-taxaIr);

    let valorFinalLiquido = montanteTotalInvestido + rendimentoLiquido;

    let impostoRenda = rendimentoBruto - rendimentoLiquido;

    valorFinalLiquido = valorFinalLiquido.toLocaleString('pt-br', {style:"currency", currency: "BRL"});

    montanteTotal = montanteTotal.toLocaleString('pt-br', {style: "currency", currency: "BRL"});

    montanteTotalInvestido = montanteTotalInvestido.toLocaleString('pt-br', {style: "currency", currency: "BRL"});

    rendimentoLiquido = rendimentoLiquido.toLocaleString('pt-br', {style:"currency", currency: "BRL"});

    rendimentoBruto = rendimentoBruto.toLocaleString('pt-br', {style:"currency", currency: "BRL"});

    impostoRenda = impostoRenda.toLocaleString('pt-br', {style: "currency", currency: "BRL"});

    document.getElementById("resultado_valor_bruto").textContent = montanteTotal;
    document.getElementById("valor_investido").textContent = montanteTotalInvestido;
    document.getElementById("rend_bruto").textContent = rendimentoBruto;
    document.getElementById("rend_liquido").textContent = rendimentoLiquido;
    document.getElementById("imposto").textContent = impostoRenda;
    document.getElementById("valor_liquido").textContent = valorFinalLiquido;
    

    document.getElementById("relatorio_investimento").style.display = "block";
   
});






