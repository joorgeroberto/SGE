# SGE

Sistema de Gerenciamento de Eventos - SGE
 - Projeto final para a Disciplina de Engenharia de Software II.
 
 # Diagrama de Casos de Uso: 
 ![alt tag](https://github.com/joorgeroberto/SGE/UseCase_SGE.jpg "Use Case")
 
 # Pacotes:
 A arquitetura da aplicação é dividida em três pacotes: Components, Actions e Store.
	-	Components podem ser Presentation Components, elementos simples de interface como Buttons e TextInputs, ou Smart Components, basicamente telas ou conjuntos de Presentation Components que fazem conexão com as Actions.
	-	Quando uma Action é acionada, retorna um dispach para a Store. Actions funcionam como um pacote de comunicação entre os Components e o Store ou da Aplicação com o Banco de Dados já que possuiremos Actions com responsabilidades diferentes como realizar autenticação do usuário ou ativar a transição entre telas, por exemplo.
	-	Store é dividido em dois pacotes menores chamados de Reducers e State. Reducers recebem informações enviadas pelas Actions e atualizam o estado da aplicação (State). Com o isto, os Components necessários são atualizados.
  
  ![alt tag](https://github.com/joorgeroberto/SGE/Package_SGE.jpg "Diagrama de Classes")
 
  
 # Diagrama de Classes de Projeto:
 ![alt tag](https://github.com/joorgeroberto/SGE/ClassDiagram_SGE.jpg "Diagrama de Classes")
 
 # Modelo de Dados: 
  Inicialmente, utilizaremos Firebase neste projeto. Este é um Bando de Dados noSQL onde os dados são representados em JSON. Posteriormente podemos integrar esta aplicação com o Sigaa.
  
  O Sistema possui 3 tipos de usuário:
  ![alt tag](https://github.com/joorgeroberto/SGE/Users_SGE.jpeg"Diagrama de Classes")
  
  # Hardware: 
  O sistema roda em Smartphones com Sistemas Operacionais:
   - Android 4.4 ou superior.
   - Ios 9.0 ou superior.
