import os

def criar_estrutura(nome_pasta):
    # Cria a pasta com o nome fornecido
    if not os.path.exists(nome_pasta):
        os.makedirs(nome_pasta)

    # Lista dos arquivos a serem criados
    arquivos = ['controller', 'router', 'services', 'types']

    for arquivo in arquivos:
        nome_arquivo = f"{nome_pasta}/{nome_pasta}.{arquivo}.ts"
        with open(nome_arquivo, 'w') as f:
            # Escreve algum conteúdo básico no arquivo
            f.write(f'// Este é o arquivo {nome_arquivo}\n')
            f.write('// Insira seu código aqui\n')

            # Adiciona código específico para controller e router
            if arquivo == 'controller':
                f.write("\nimport { Request, Response } from 'express';\n")
                f.write("import { ReasonPhrases, StatusCodes } from 'http-status-codes';\n\n")
                f.write("const create = async (req: Request, res: Response) => {};\n")
                f.write("const read = async (req: Request, res: Response) => {};\n")
                f.write("const update = async (req: Request, res: Response) => {};\n")
                f.write("const remove = async (req: Request, res: Response) => {};\n")
            elif arquivo == 'router':
                f.write("\nimport { Router } from 'express';\n\n")
                f.write("const router = Router();\n\n")
                f.write("router.post('/', create);\n")
                f.write("router.get('/', read);\n")
                f.write("router.put('/', update);\n")
                f.write("router.delete('/', remove);\n\n")
                f.write("export default router;\n")

    print(f'Estrutura criada com sucesso em {nome_pasta}!')

# Chamada da função para criar a estrutura com o nome desejado
nome = input("Digite o nome da pasta: ")
criar_estrutura(nome)
