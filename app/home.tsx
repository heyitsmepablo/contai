import "../global.css";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import GraficoGastos from "@/components/GraficoGastos";

export default function App() {
  return (
    // Fundo escuro profundo (quase preto) típico de apps modernos
    <SafeAreaView className="flex-1 bg-[#09090b]">
      <ScrollView className="flex-1 px-5 pt-4">
        {/* --- 1. CABEÇALHO (Avatar e Sino) --- */}
        <View className="flex-row justify-between items-center mb-8 mt-2">
          <View className="flex-row items-center gap-3">
            {/* Avatar Roxo */}
            <View className="w-10 h-10 rounded-full bg-purple-900/50 items-center justify-center border border-purple-800">
              <Text className="text-purple-400 font-bold text-lg">P</Text>
            </View>
            <View>
              <Text className="text-zinc-500 text-xs font-medium">
                Fevereiro, 2026
              </Text>
              <Text className="text-white text-lg font-semibold">
                E aí, Pablo!
              </Text>
            </View>
          </View>

          {/* Sino de Notificação */}
          {/* <View className="w-10 h-10 rounded-full bg-zinc-900 items-center justify-center border border-zinc-800">
            <Ionicons name="notifications-outline" size={20} color="#a1a1aa" />
            <View className="absolute top-2 right-2.5 w-2 h-2 bg-green-500 rounded-full border border-[#09090b]" />
          </View> */}
        </View>

        {/* --- 2. SALDO E STATUS --- */}
        <View className="mb-8">
          <Text className="text-zinc-500 text-xs font-bold tracking-wider mb-2">
            TOTAL EM FEVEREIRO
          </Text>
          <Text className="text-white text-4xl font-extrabold tracking-tight mb-4">
            R$ 1.450,00
          </Text>

          {/* Badge de Escutando Notificações (self-start para não esticar) */}
          <View className="self-start flex-row items-center gap-2 bg-green-950/40 px-3 py-1.5 rounded-full border border-green-900/50">
            <View className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <Text className="text-green-500 text-xs font-medium">
              Escutando notificações...
            </Text>
          </View>
        </View>

        {/* --- 3. CARTÕES ENTRADAS E SAÍDAS --- */}
        <View className="flex-row gap-4 mb-8">
          {/* Cartão Entrada */}
          <View className="flex-1 bg-[#121214] border border-zinc-800/80 rounded-3xl p-4">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-zinc-500 text-xs font-bold tracking-wider">
                ENTRADAS
              </Text>
              <View className="bg-green-950/50 p-1.5 rounded-full">
                <Ionicons name="arrow-down" size={16} color="#22c55e" />
              </View>
            </View>
            <Text className="text-white font-bold text-2xl mb-1">R$ 5.200</Text>
            <Text className="text-green-500 text-xs font-medium">
              +12% vs jan
            </Text>
          </View>

          {/* Cartão Saída */}
          <View className="flex-1 bg-[#121214] border border-zinc-800/80 rounded-3xl p-4">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-zinc-500 text-xs font-bold tracking-wider">
                SAÍDAS
              </Text>
              <View className="bg-red-950/50 p-1.5 rounded-full">
                <Ionicons name="arrow-up" size={16} className="text-red-500" />
              </View>
            </View>
            <Text className="text-white font-bold text-2xl mb-1">R$ 1.450</Text>
            <Text className="text-red-400 text-xs font-medium">-8% vs jan</Text>
          </View>
        </View>

        {/* O Gráfico virá aqui abaixo depois */}
        <GraficoGastos />
        <View className="h-40" />
      </ScrollView>
    </SafeAreaView>
  );
}
