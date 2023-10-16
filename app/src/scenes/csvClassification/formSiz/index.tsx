import { Input } from "../../../components"
import * as S from "../style"

export const FormSix = ()=>{
    return (
        <S.FormContainer>
            <S.FormLabel>
                Batch Size
            </S.FormLabel>
            <Input  name="batch_size" />
        </S.FormContainer>
    )
} 