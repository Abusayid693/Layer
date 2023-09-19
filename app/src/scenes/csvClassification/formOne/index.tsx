import { Input } from "../../../components"
import * as S from "../style"

export const FormOne = ()=>{
    return (
        <S.FormContainer>
            <S.FormLabel>
                Model Name
            </S.FormLabel>
            <Input  name="name" />
        </S.FormContainer>
    )
}