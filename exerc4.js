/*
4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. 
Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser.
Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas,
qual interruptor controla cada lâmpada? 

Resposta:
SalaInterruptores, Sala1, Sala2, Sala3, 
Int1, Int2, Int3

- Ligo Int1
- Vou a Sala1
- Se a luz estiver ligada, Int1 = Sala1, se não, pertece ou a Sala2 ou Sala3
- Volto a SalaInterruptores, desligo Int1 e ligo Int2;
- Vou a Sala2
- Se a luz estiver ligada, Int2 = Sala2, se Int1 = Sala1 também então Int3 = Sala3
- Se Int1 != Sala1 e Int2 = Sala2, então Int1 = Sala3 e Int3 = Sala1
- Se Int1 != Sala1 e Int2 != Sala2, não tem como descobrir com apenas duas idas, porque Int1 pode ser tanto Sala2 e Sala3, Int2 pode ser tanto Sala1 e Sala3, e Int3 pode ser Sala1, Sala2 e Sala3
*/