import os

def criar_estrutura(nome_pasta):
    # Cria a pasta com o nome fornecido
    if not os.path.exists(nome_pasta):
        os.makedirs(nome_pasta)

    # Lista dos arquivos a serem criados
    arquivos = ['controller', 'router', 'services', 'types']

    # Loop para criar os arquivos dentro da pasta
    for arquivo in arquivos:
        nome_arquivo = f"{nome_pasta}/{nome_pasta}.{arquivo}.ts"
        with open(nome_arquivo, 'w') as f:
            # Escreve algum conteúdo básico no arquivo
            f.write(f'// Este é o arquivo {nome_arquivo}\n')
            f.write('// Insira seu código aqui\n')

    print(f'Estrutura criada com sucesso em {nome_pasta}!')

# Chamada da função para criar a estrutura com o nome desejado
nome = input("Digite o nome da pasta: ")
criar_estrutura(nome)
