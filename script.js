const CalcularBTUS = {
    data() {
        return {
            AreaComodo: "",
            QntdPessoas: "",
            Dispositivos: "",
            Pessoas: 0,
            resultado: 0,
            tela:""
        }
    },
    methods: {
        calcular: function () {
            if (this.AreaComodo == "" || this.QntdPessoas == "" || this.Dispositivos == "") {
                alert("Preencha os campos")
            }
            else if (this.AreaComodo == "" && this.QntdPessoas == "" || this.QntdPessoas == "" && this.Dispositivos == "") {
                alert("Preencha os campos")
            }
            else if (this.AreaComodo == "" && this.QntdPessoas == "" && this.Dispositivos == "") {
                alert("Preencha os campos")
            }


            else if (this.AreaComodo !== "" && this.QntdPessoas !== "" && this.Dispositivos !== "") {
                this.Pessoas = this.QntdPessoas - 1

                this.resultado = (this.AreaComodo * 600) + (this.Pessoas * 600) + (this.Dispositivos * 600)

                
                this.tela = "o resultado é : " +this.resultado + " BTU"
            }
        }
    },
}

Vue.createApp(CalcularBTUS).mount("#App")