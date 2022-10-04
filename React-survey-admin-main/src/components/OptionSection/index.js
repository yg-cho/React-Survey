import styled from "styled-components";
import {useSelector, useDispatch} from "react-redux";
import {Button, Form, Input, InputNumber, Switch} from "antd";
import {Fragment, useEffect} from "react";
import { setQuestion } from "../../stores/survey/surveySlice";

const {Item} = Form;

const groups = [
  {
    title:'공통옵션',
    fields: [
      {
        label: "질문",
        name: "title",
        rules: [{ required:true}],
        type: 'text',
      },
      {
        label: "설명",
        name: "desc",
        rules: [{ required:true}],
        type: 'text',
      },
      {
        label: "필수여부",
        name: "required",
        rules: [],
        type: 'switch',
        valuePropName: 'checked'
      },
    ]
  },
]


const detailFieldsMap = {
  text: [
    {
      label: 'Placeholder',
      name: 'placeholder',
      rules: [{ required: false }],
      type: 'text',
    },
    {
      label: '최대 입력 길이',
      name: 'max',
      rules: [{ required: false }],
      type: 'number',
    },
  ],
  textarea: [
    {
      label: 'Placeholder',
      name: 'placeholder',
      rules: [{ required: false }],
      type: 'text',
    },
    {
      label: '최대 입력 길이',
      name: 'max',
      rules: [{ required: false }],
      type: 'number',
    },
  ],
  select: [
    {
      label: '답변',
      name: 'items',
      rules: [{ required: true }],
      type: 'text',
    },
    {
      label: '최대 선택 가능 개수',
      name: 'max',
      rules: [{ required: false }],
      type: 'number',
    },
  ],
};

const getFieldInput = (type) => {
  if(type === 'text') return <Input />
  else if(type ==='switch') return <Switch />
  else if(type === 'number') return <InputNumber />
  return null;
}

const OptionSection = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const questions = useSelector((state) =>
    state.selectedQuestionId.data === null
      ? null
      : state.survey.data.questions[state.selectedQuestionId.data]
  )
  const selectedQuestionsId = useSelector((state) => state.selectedQuestionId.data)

  useEffect(() => {
    if(!questions) return;

    const type = questions.type;
    const detailFieldsValue = {};
    if(type === 'text' || type === 'textarea') {
      detailFieldsValue.max = questions.options.max;
      detailFieldsValue.placeholder = questions.options.placeholder;
    } else if (type === 'select') {
      detailFieldsValue.max = questions.options.max;
      detailFieldsValue.items = questions.options.items.join(';');
    }

    form.setFieldsValue({
      title: questions.title,
      desc: questions.desc,
      required: questions.required,
      ...detailFieldsValue,
    })
    },[form,questions]);


  const mergedGroups = questions
    ? [
        ...groups,
        {
          title: '세부옵션',
          fields: detailFieldsMap[questions.type]
        }
      ]
    : [];

  return (
    <OptionSectionWrapper>
      <Title>문항 옵션</Title>
      <FormWrapper>
      {questions?
        <Form form={form} name={"option-form"} layout={"vertical"}>
          {mergedGroups.map((group, index) => (
            <Fragment key={index}>
              <SubTitle>{group.title}</SubTitle>
              {group.fields.map((field, index) => (
                <Item key={index} {...field}>
                  {getFieldInput(field.type)}
                </Item>
              ))}
            </Fragment>
          ))}

          <Item>
            <Button type={"primary"}
                    onClick={() => {
                      const {title, desc, required, ...options} = form.getFieldValue();
                      const values = {
                        title,
                        desc,
                        required,
                        options,
                        type: questions.type
                      }
                      console.log("values : ",values);
                      dispatch(setQuestion({index: selectedQuestionsId, data: values}))
                    }}
            >적용</Button>
          </Item>
        </Form>
        : (
          "질문을 선택해주세요."
        )}


    </FormWrapper>
    </OptionSectionWrapper>
  );
};

const OptionSectionWrapper = styled.div`
  height: 100%;
  background: #ffffff;
  border-left: 1px solid #dddddd;
`;

const Title = styled.div`
  font-weight: 500;
  background: #f0f0f0;
  border-bottom: 1px solid #dddddd;
  padding: 10px 0;
  text-align: center;
`;

const FormWrapper = styled.div`
  padding: 20px;
`;

const SubTitle = styled.div`
  font-size: 1.03rem;
  font-weight: 600;
  margin: 10px 0;
`;


export default OptionSection;


/*
  {
    title: '',
    desc: '',
    options: {
    }
  }
 */