import { useForm } from "react-hook-form";
import databaseAdd from "../assets/skin/database_add.png";
import databaseEdit from "../assets/skin/database_edit.png";
import databaseCancel from "../assets/skin/multiply.png";
import Nongov from "../interfaces/nongov";
import Category from "../interfaces/category";
import useSignUpNongov from "../hooks/useSignUpNongov";
import { useEffect } from "react";
import { z } from "zod";
import checkDate from "../util/checkDate";
import { zodResolver } from "@hookform/resolvers/zod";
import useNongovStore from "../util/nongovStore";
import dayjs from "dayjs";
import useUpdateNongov from "../hooks/useUpdateNongov";

// interface FormProduto {
//   nome: string;
//   descricao: string;
//   categoria: number;
//   data_cadastro: string;
//   preco: number;
//   qtd_estoque: number;
//   imagem: string;
//   disponivel: boolean;
// }

const categoriaValida = (categoria: string) => {
  return categoria !== "0";
};

const regexData = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
const regexImagem = /^[a-z]+\.(gif|jpg|png|bmp)$/;
const schema = z.object({
  nome: z
    .string()
    .min(1, { message: "O nome deve ser informado." })
    .min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
  descricao: z.string().min(1, { message: "A descição deve ser informada." }),
  categoria: z.string().refine(categoriaValida, { message: "A categoria deve ser informada." }),
  data_cadastro: z
    .string()
    .min(1, { message: "A data de cadastro deve ser informada." })
    .regex(regexData, { message: "Data inválida." })
    .refine(checkDate, { message: "Data inválida." }),
  imagem: z
    .string()
    .min(1, { message: "A imagem deve ser informada." })
    .regex(regexImagem, { message: "Nome de imagem inválido." }),
});

const InsertNongov = () => {
  const selectedNongov = useNongovStore((s) => s.selectedNonGov);
  const setSelectednongov = useNongovStore((s) => s.setSelectedNonGov);

  type FormNongov = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    setValue,
    formState: { isSubmitSuccessful, errors },
  } = useForm<FormNongov>({ resolver: zodResolver(schema) });

  useEffect(() => {
    setFocus("nome");
    reset();
    setSelectednongov({} as Nongov);
  }, [isSubmitSuccessful]);

  useEffect(() => {
    setFocus("nome");
    reset();
    if (selectedNongov.id) {
      setValue("nome", selectedNongov.name);
      setValue("descricao", selectedNongov.description);
      setValue("categoria", String(selectedNongov.category.id));
      setValue("data_cadastro", dayjs(selectedNongov.signupDate).format("DD/MM/YYYY"));
      setValue("imagem", selectedNongov.image);
    }
  }, [selectedNongov]);

  const { mutate: cadastrarProduto, error: errorCadastrarProduto } = useSignUpNongov();
  const { mutate: alterarProduto, error: errorAlterarProduto } = useUpdateNongov();

  const onSubmit = ({
    nome,
    descricao,
    categoria,
    data_cadastro,
    imagem
  }: FormNongov) => {
    const produto: Nongov = {
      name: nome,
      description: descricao,
      image: imagem,
      category: { id: parseInt(categoria) } as Category,
      signupDate: new Date( // DD/MM/AAAA   AAAA-MM-DD
        data_cadastro.substring(6, 10) +
          "-" +
          data_cadastro.substring(3, 5) +
          "-" +
          data_cadastro.substring(0, 2)
      )
    };
    if (selectedNongov.id) {
      produto.id = selectedNongov.id;
      alterarProduto(produto);
    } else {
      cadastrarProduto(produto);
    }
  };

  // Isso faz com que a página de erro seja exibida
  if (errorCadastrarProduto) throw errorCadastrarProduto;
  if (errorAlterarProduto) throw errorAlterarProduto;

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="Off">
      <div className="row">
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="nome" className="col-xl-2 fw-bold">
              Nome
            </label>
            <div className="col-xl-10">
              <input
                {...register("nome")}
                type="text"
                id="nome"
                className={
                  errors.nome
                    ? "form-control form-control-sm is-invalid"
                    : "form-control form-control-sm"
                }
              />
              <div className="invalid-feedback">{errors.nome?.message}</div>
              {/* {errors.nome && <p className="text-danger">{errors.nome.message}</p>} */}
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="descricao" className="col-xl-3 fw-bold">
              Descrição
            </label>
            <div className="col-xl-9">
              <input
                {...register("descricao")}
                type="text"
                id="descricao"
                className={
                  errors.descricao
                    ? "form-control form-control-sm is-invalid"
                    : "form-control form-control-sm"
                }
              />
              <div className="invalid-feedback">{errors.descricao?.message}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-1">
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="categoria" className="col-xl-2 fw-bold">
              Categoria
            </label>
            <div className="col-xl-10">
              <select
                {...register("categoria")}
                id="categoria"
                className={
                  errors.categoria
                    ? "form-control form-control-sm is-invalid"
                    : "form-control form-control-sm"
                }
              >
                <option value="0">Selecione uma categoria</option>
                <option value="1">Animal</option>
                <option value="2">Child</option>
                <option value="3">Education</option>
                <option value="4">Environment</option>
                <option value="5">Food</option>
                <option value="6">Health</option>
              </select>
              <div className="invalid-feedback">{errors.categoria?.message}</div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="data_cadastro" className="col-xl-3 fw-bold">
              Data Cadastro
            </label>
            <div className="col-xl-9">
              <input
                {...register("data_cadastro")}
                type="text"
                id="data_cadastro"
                className={
                  errors.data_cadastro
                    ? "form-control form-control-sm is-invalid"
                    : "form-control form-control-sm"
                }
              />
              <div className="invalid-feedback">{errors.data_cadastro?.message}</div>
            </div>
          </div>
        </div>
      </div>
 
      <div className="row mb-1">
        <div className="col-xl-6">
          <div className="row mb-2">
            <label htmlFor="imagem" className="col-xl-2 fw-bold">
              Imagem
            </label>
            <div className="col-xl-10">
              <input
                {...register("imagem")}
                type="text"
                id="imagem"
                className={
                  errors.imagem
                    ? "form-control form-control-sm is-invalid"
                    : "form-control form-control-sm"
                }
              />
              <div className="invalid-feedback">{errors.imagem?.message}</div>
            </div>
          </div>
        </div>
      </div>

      {/*
       Aqui entra o restante do form
      */}

      <div className="row mb-5">
        <div className="col-xl-6">
          <div className="row">
            <div className="col-xl-10 offset-xl-2 d-flex">
              <button
                style={{minWidth: "100px"}}
                id="botao"
                type="submit"
                className="btn btn-primary btn-sm d-flex align-items-center me-2"
              >
                {selectedNongov.id ? (
                  <>
                    <img src={databaseEdit} className="me-1" /> Alterar
                  </>
                ) : (
                  <>
                    <img src={databaseAdd} className="me-1" /> Cadastrar
                  </>
                )}
              </button>
              <button className="btn btn-primary btn-sm d-flex align-items-center " onClick={() => {
                reset();
                setSelectednongov({} as Nongov);
              }} type="button">
                <img src={databaseCancel} className="me-1" /> Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default InsertNongov;
