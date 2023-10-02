##   Obtenha dados da altura e o gênero (H ou M) de 15 pessoas e apresente os seguintes resultados:

##      - A maior e a menor altura do grupo;
##      - A média de altura dos homens;
##      - O número de mulheres;

alturas_homem = []
alturas_mulher = []
total_alturas = []

for i in range(3):
    genero = input("Digite seu gênero com M para Mulher e H para Homem: ").lower()
    altura = float(input("Digite sua altura em cm: "))
    total_alturas.append(altura)

    if genero == "m":
        alturas_mulher.append(altura)
    else:
        alturas_homem.append(altura)

qtd_mulheres = len(alturas_mulher) 
qtd_homens = len(alturas_homem)      

media_homens = sum(alturas_homem) / qtd_homens


print(f"A menor altura do grupo é {max(total_alturas)}cm e a menor altura é {min(total_alturas)}cm.")
print(f"A média de altura dos homens é de: {media_homens}cm.")
print(f"A quantidade de mulheres é {qtd_mulheres}.")
