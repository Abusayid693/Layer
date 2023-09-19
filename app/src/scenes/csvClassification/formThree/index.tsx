import { Input } from "../../../components"
import * as S from "../style"

export const FormThree = ()=>{
    return (
        <S.FormContainer>
            <S.FormLabel>
                Learning Rate
            </S.FormLabel>
            <Input  name="learning_rate" />
        </S.FormContainer>
    )
} 