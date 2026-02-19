import { View, Text } from "react-native";
import { BarChart } from "react-native-gifted-charts";

export default function GraficoGastos() {
  // Cores idênticas ao design: cinza escuro para quase tudo, roxo para o destaque
  const corApagada = "#27272a";
  const corDestaque = "#a855f7"; // Roxo do Contaí

  const barData = [
    { value: 45, label: "Seg", frontColor: corApagada },
    { value: 80, label: "Ter", frontColor: corApagada },
    { value: 30, label: "Qua", frontColor: corApagada },
    { value: 65, label: "Qui", frontColor: corApagada },
    { value: 110, label: "Sex", frontColor: corApagada },
    { value: 210, label: "Sáb", frontColor: corDestaque }, // Barra destacada!
    { value: 90, label: "Dom", frontColor: corApagada },
  ];

  return (
    // Fundo seguindo o padrão dos cartões de entrada/saída (#121214)
    <View className="bg-[#121214] border border-zinc-800/80 p-5 rounded-3xl mb-8">
      {/* Cabeçalho do Gráfico igual à imagem */}
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-white text-base font-bold">Gastos da semana</Text>
        <Text className="text-zinc-500 text-xs font-medium">Fev 10 - 16</Text>
      </View>

      <View className="items-center pr-2">
        <BarChart
          data={barData}
          barWidth={24} // Um pouquinho mais fina para ficar elegante
          spacing={16}
          roundedTop
          roundedBottom
          hideRules
          xAxisThickness={0}
          yAxisThickness={0}
          xAxisLabelTextStyle={{
            color: "#71717a",
            fontSize: 11,
            textAlign: "center",
          }}
          yAxisTextStyle={{ color: "#71717a" }}
          height={160} // <--- AQUI DEIXAMOS O GRÁFICO MENOR NA ALTURA
          noOfSections={3}
          maxValue={250}
          isAnimated
          renderTooltip={(item: any) => {
            return (
              <View className="bg-white px-2 py-1 rounded-md mb-2 items-center shadow-lg">
                <Text className="text-zinc-900 font-bold text-xs">
                  R$ {item.value}
                </Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
