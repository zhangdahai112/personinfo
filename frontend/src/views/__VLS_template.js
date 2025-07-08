import Insurance from './Insurance.vue';
import Bank from './Bank.vue';
import Account from './Account.vue';
import Phone from './Phone.vue';
import NoAccount from './NoAccount.vue';
import AddItemDialog from '../components/AddItemDialog';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './Home.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'container'?: boolean; } &
{ 'container'?: boolean; } &
{ 'baoxian-item'?: boolean; } &
{ 'el-row'?: boolean; } &
{ 'el-col'?: boolean; } &
{ 'bg-purple-dark'?: boolean; } &
{ 'bg-purple'?: boolean; } &
{ 'bg-purple-light'?: boolean; } &
{ 'grid-content'?: boolean; } &
{ 'grid-content-item'?: boolean; } &
{ 'row-bg'?: boolean; } &
{ 'text'?: boolean; } &
{ 'item'?: boolean; } &
{ 'clearfix'?: boolean; } &
{ 'clearfix'?: boolean; } &
{ 'clearfix'?: boolean; } &
{ 'box-card'?: boolean; } &
{ 'title'?: boolean; } &
{ 'title-detail'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'ElCard', typeof __VLS_localComponents, "ElCard", "elCard", "el-card"> &
__VLS_WithComponent<'ElInput', typeof __VLS_localComponents, "ElInput", "elInput", "el-input"> &
__VLS_WithComponent<'ElRow', typeof __VLS_localComponents, "ElRow", "elRow", "el-row"> &
__VLS_WithComponent<'ElCol', typeof __VLS_localComponents, "ElCol", "elCol", "el-col"> &
__VLS_WithComponent<'ElButton', typeof __VLS_localComponents, "ElButton", "elButton", "el-button"> &
__VLS_WithComponent<'Insurance', typeof __VLS_localComponents, "Insurance", "Insurance", "Insurance"> &
__VLS_WithComponent<'Bank', typeof __VLS_localComponents, "Bank", "Bank", "Bank"> &
__VLS_WithComponent<'Account', typeof __VLS_localComponents, "Account", "Account", "Account"> &
__VLS_WithComponent<'Phone', typeof __VLS_localComponents, "Phone", "Phone", "Phone"> &
__VLS_WithComponent<'NoAccount', typeof __VLS_localComponents, "NoAccount", "NoAccount", "NoAccount"> &
__VLS_WithComponent<'AddItemDialog', typeof __VLS_localComponents, "AddItemDialog", "AddItemDialog", "AddItemDialog">;
__VLS_components.ElCard; __VLS_components.ElCard; __VLS_components.ElCard; __VLS_components.ElCard; __VLS_components.elCard; __VLS_components.elCard; __VLS_components.elCard; __VLS_components.elCard; __VLS_components["el-card"]; __VLS_components["el-card"]; __VLS_components["el-card"]; __VLS_components["el-card"];
// @ts-ignore
[ElCard, ElCard, ElCard, ElCard,];
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.h1; __VLS_intrinsicElements.h1;
__VLS_intrinsicElements.img;
__VLS_intrinsicElements.span; __VLS_intrinsicElements.span;
__VLS_components.ElInput; __VLS_components.ElInput; __VLS_components.elInput; __VLS_components.elInput; __VLS_components["el-input"]; __VLS_components["el-input"];
// @ts-ignore
[ElInput, ElInput,];
__VLS_components.ElRow; __VLS_components.ElRow; __VLS_components.ElRow; __VLS_components.ElRow; __VLS_components.ElRow; __VLS_components.ElRow; __VLS_components.ElRow; __VLS_components.ElRow; __VLS_components.ElRow; __VLS_components.ElRow; __VLS_components.ElRow; __VLS_components.ElRow; __VLS_components.elRow; __VLS_components.elRow; __VLS_components.elRow; __VLS_components.elRow; __VLS_components.elRow; __VLS_components.elRow; __VLS_components.elRow; __VLS_components.elRow; __VLS_components.elRow; __VLS_components.elRow; __VLS_components.elRow; __VLS_components.elRow; __VLS_components["el-row"]; __VLS_components["el-row"]; __VLS_components["el-row"]; __VLS_components["el-row"]; __VLS_components["el-row"]; __VLS_components["el-row"]; __VLS_components["el-row"]; __VLS_components["el-row"]; __VLS_components["el-row"]; __VLS_components["el-row"]; __VLS_components["el-row"]; __VLS_components["el-row"];
// @ts-ignore
[ElRow, ElRow, ElRow, ElRow, ElRow, ElRow, ElRow, ElRow, ElRow, ElRow, ElRow, ElRow,];
__VLS_components.ElCol; __VLS_components.ElCol; __VLS_components.ElCol; __VLS_components.ElCol; __VLS_components.ElCol; __VLS_components.ElCol; __VLS_components.ElCol; __VLS_components.ElCol; __VLS_components.ElCol; __VLS_components.ElCol; __VLS_components.ElCol; __VLS_components.ElCol; __VLS_components.elCol; __VLS_components.elCol; __VLS_components.elCol; __VLS_components.elCol; __VLS_components.elCol; __VLS_components.elCol; __VLS_components.elCol; __VLS_components.elCol; __VLS_components.elCol; __VLS_components.elCol; __VLS_components.elCol; __VLS_components.elCol; __VLS_components["el-col"]; __VLS_components["el-col"]; __VLS_components["el-col"]; __VLS_components["el-col"]; __VLS_components["el-col"]; __VLS_components["el-col"]; __VLS_components["el-col"]; __VLS_components["el-col"]; __VLS_components["el-col"]; __VLS_components["el-col"]; __VLS_components["el-col"]; __VLS_components["el-col"];
// @ts-ignore
[ElCol, ElCol, ElCol, ElCol, ElCol, ElCol, ElCol, ElCol, ElCol, ElCol, ElCol, ElCol,];
__VLS_components.ElButton; __VLS_components.ElButton; __VLS_components.ElButton; __VLS_components.ElButton; __VLS_components.ElButton; __VLS_components.ElButton; __VLS_components.ElButton; __VLS_components.ElButton; __VLS_components.ElButton; __VLS_components.ElButton; __VLS_components.ElButton; __VLS_components.ElButton; __VLS_components.elButton; __VLS_components.elButton; __VLS_components.elButton; __VLS_components.elButton; __VLS_components.elButton; __VLS_components.elButton; __VLS_components.elButton; __VLS_components.elButton; __VLS_components.elButton; __VLS_components.elButton; __VLS_components.elButton; __VLS_components.elButton; __VLS_components["el-button"]; __VLS_components["el-button"]; __VLS_components["el-button"]; __VLS_components["el-button"]; __VLS_components["el-button"]; __VLS_components["el-button"]; __VLS_components["el-button"]; __VLS_components["el-button"]; __VLS_components["el-button"]; __VLS_components["el-button"]; __VLS_components["el-button"]; __VLS_components["el-button"];
// @ts-ignore
[ElButton, ElButton, ElButton, ElButton, ElButton, ElButton, ElButton, ElButton, ElButton, ElButton, ElButton, ElButton,];
__VLS_components.Insurance; __VLS_components.Insurance;
// @ts-ignore
[Insurance, Insurance,];
__VLS_components.Bank; __VLS_components.Bank;
// @ts-ignore
[Bank, Bank,];
__VLS_components.Account; __VLS_components.Account;
// @ts-ignore
[Account, Account,];
__VLS_components.Phone; __VLS_components.Phone;
// @ts-ignore
[Phone, Phone,];
__VLS_components.NoAccount; __VLS_components.NoAccount;
// @ts-ignore
[NoAccount, NoAccount,];
__VLS_components.AddItemDialog;
// @ts-ignore
[AddItemDialog,];
{
const __VLS_0 = ({} as 'ElCard' extends keyof typeof __VLS_ctx ? { 'ElCard': typeof __VLS_ctx.ElCard; } : 'elCard' extends keyof typeof __VLS_ctx ? { 'ElCard': typeof __VLS_ctx.elCard; } : 'el-card' extends keyof typeof __VLS_ctx ? { 'ElCard': (typeof __VLS_ctx)["el-card"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElCard;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, class: ("avator"), }));
({} as { ElCard: typeof __VLS_0; }).ElCard;
({} as { ElCard: typeof __VLS_0; }).ElCard;
const __VLS_2 = __VLS_1({ ...{}, class: ("avator"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("avator"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["div"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, slot: ("header"), class: ("clearfix"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, slot: ("header"), class: ("clearfix"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["h1"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
(__VLS_13.slots!).default;
}
(__VLS_8.slots!).default;
}
{
const __VLS_15 = __VLS_intrinsicElements["div"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
const __VLS_20 = __VLS_intrinsicElements["div"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
const __VLS_22 = __VLS_21({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
{
const __VLS_25 = __VLS_intrinsicElements["img"];
const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
const __VLS_27 = __VLS_26({ ...{}, src: ("#"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, src: ("#"), style: ({}), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
}
(__VLS_23.slots!).default;
}
{
const __VLS_30 = __VLS_intrinsicElements["div"];
const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
const __VLS_32 = __VLS_31({ ...{}, style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, style: ({}), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
{
const __VLS_35 = __VLS_intrinsicElements["span"];
const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
const __VLS_37 = __VLS_36({ ...{}, class: ("title"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, class: ("title"), style: ({}), });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
(__VLS_38.slots!).default;
}
{
const __VLS_40 = ({} as 'ElInput' extends keyof typeof __VLS_ctx ? { 'ElInput': typeof __VLS_ctx.ElInput; } : 'elInput' extends keyof typeof __VLS_ctx ? { 'ElInput': typeof __VLS_ctx.elInput; } : 'el-input' extends keyof typeof __VLS_ctx ? { 'ElInput': (typeof __VLS_ctx)["el-input"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElInput;
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{}, modelValue: ((__VLS_ctx.customer)), width: ("100px"), style: ({}), placeholder: ("熊册"), }));
({} as { ElInput: typeof __VLS_40; }).ElInput;
({} as { ElInput: typeof __VLS_40; }).ElInput;
const __VLS_42 = __VLS_41({ ...{}, modelValue: ((__VLS_ctx.customer)), width: ("100px"), style: ({}), placeholder: ("熊册"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{}, modelValue: ((__VLS_ctx.customer)), width: ("100px"), style: ({}), placeholder: ("熊册"), });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
}
(__VLS_33.slots!).default;
}
(__VLS_18.slots!).default;
}
(__VLS_3.slots!).default;
}
{
const __VLS_45 = ({} as 'ElCard' extends keyof typeof __VLS_ctx ? { 'ElCard': typeof __VLS_ctx.ElCard; } : 'elCard' extends keyof typeof __VLS_ctx ? { 'ElCard': typeof __VLS_ctx.elCard; } : 'el-card' extends keyof typeof __VLS_ctx ? { 'ElCard': (typeof __VLS_ctx)["el-card"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElCard;
const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({ ...{}, class: ("box-card"), }));
({} as { ElCard: typeof __VLS_45; }).ElCard;
({} as { ElCard: typeof __VLS_45; }).ElCard;
const __VLS_47 = __VLS_46({ ...{}, class: ("box-card"), }, ...__VLS_functionalComponentArgsRest(__VLS_46));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_45, typeof __VLS_47> & Record<string, unknown>) => void)({ ...{}, class: ("box-card"), });
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
let __VLS_49!: __VLS_NormalizeEmits<typeof __VLS_48.emit>;
{
const __VLS_50 = ({} as 'ElRow' extends keyof typeof __VLS_ctx ? { 'ElRow': typeof __VLS_ctx.ElRow; } : 'elRow' extends keyof typeof __VLS_ctx ? { 'ElRow': typeof __VLS_ctx.elRow; } : 'el-row' extends keyof typeof __VLS_ctx ? { 'ElRow': (typeof __VLS_ctx)["el-row"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElRow;
const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ ...{}, }));
({} as { ElRow: typeof __VLS_50; }).ElRow;
({} as { ElRow: typeof __VLS_50; }).ElRow;
const __VLS_52 = __VLS_51({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_51));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_50, typeof __VLS_52> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52)!;
let __VLS_54!: __VLS_NormalizeEmits<typeof __VLS_53.emit>;
{
const __VLS_55 = ({} as 'ElCol' extends keyof typeof __VLS_ctx ? { 'ElCol': typeof __VLS_ctx.ElCol; } : 'elCol' extends keyof typeof __VLS_ctx ? { 'ElCol': typeof __VLS_ctx.elCol; } : 'el-col' extends keyof typeof __VLS_ctx ? { 'ElCol': (typeof __VLS_ctx)["el-col"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElCol;
const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({ ...{}, span: ((24)), }));
({} as { ElCol: typeof __VLS_55; }).ElCol;
({} as { ElCol: typeof __VLS_55; }).ElCol;
const __VLS_57 = __VLS_56({ ...{}, span: ((24)), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_55, typeof __VLS_57> & Record<string, unknown>) => void)({ ...{}, span: ((24)), });
const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57)!;
let __VLS_59!: __VLS_NormalizeEmits<typeof __VLS_58.emit>;
if (__VLS_ctx.insurances.length) {
{
const __VLS_60 = __VLS_intrinsicElements["div"];
const __VLS_61 = __VLS_elementAsFunctionalComponent(__VLS_60);
const __VLS_62 = __VLS_61({ ...{}, style: ({}), class: ("bg-purple-dark"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_60, typeof __VLS_62> & Record<string, unknown>) => void)({ ...{}, style: ({}), class: ("bg-purple-dark"), });
const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62)!;
let __VLS_64!: __VLS_NormalizeEmits<typeof __VLS_63.emit>;
('保险（' + __VLS_ctx.insurances.length +
'个）：');
(__VLS_63.slots!).default;
}
// @ts-ignore
[customer, customer, customer, insurances, insurances,];
}
else {
{
const __VLS_65 = __VLS_intrinsicElements["div"];
const __VLS_66 = __VLS_elementAsFunctionalComponent(__VLS_65);
const __VLS_67 = __VLS_66({ ...{}, style: ({}), class: ("bg-purple-dark"), }, ...__VLS_functionalComponentArgsRest(__VLS_66));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_65, typeof __VLS_67> & Record<string, unknown>) => void)({ ...{}, style: ({}), class: ("bg-purple-dark"), });
const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67)!;
let __VLS_69!: __VLS_NormalizeEmits<typeof __VLS_68.emit>;
(__VLS_68.slots!).default;
}
}
{
const __VLS_70 = ({} as 'ElButton' extends keyof typeof __VLS_ctx ? { 'ElButton': typeof __VLS_ctx.ElButton; } : 'elButton' extends keyof typeof __VLS_ctx ? { 'ElButton': typeof __VLS_ctx.elButton; } : 'el-button' extends keyof typeof __VLS_ctx ? { 'ElButton': (typeof __VLS_ctx)["el-button"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElButton;
const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({ ...{ onClick: {} as any, }, class: ("add-button"), type: ("primary"), }));
({} as { ElButton: typeof __VLS_70; }).ElButton;
({} as { ElButton: typeof __VLS_70; }).ElButton;
const __VLS_72 = __VLS_71({ ...{ onClick: {} as any, }, class: ("add-button"), type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_70, typeof __VLS_72> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("add-button"), type: ("primary"), });
const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72)!;
let __VLS_74!: __VLS_NormalizeEmits<typeof __VLS_73.emit>;
let __VLS_75 = { 'click': __VLS_pickEvent(__VLS_74['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_71, typeof __VLS_72>).onClick) };
__VLS_75 = {
click: $event => {
__VLS_ctx.addItem('insurance', __VLS_ctx.insurances);
// @ts-ignore
[addItem, insurances,];
}
};
(__VLS_73.slots!).default;
}
{
const __VLS_76 = __VLS_intrinsicElements["div"];
const __VLS_77 = __VLS_elementAsFunctionalComponent(__VLS_76);
const __VLS_78 = __VLS_77({ ...{}, class: ("grid-content"), }, ...__VLS_functionalComponentArgsRest(__VLS_77));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_76, typeof __VLS_78> & Record<string, unknown>) => void)({ ...{}, class: ("grid-content"), });
const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_76, __VLS_78)!;
let __VLS_80!: __VLS_NormalizeEmits<typeof __VLS_79.emit>;
for (const [i, $index] of __VLS_getVForSourceType((__VLS_ctx.insurances)!)) {
{
const __VLS_81 = ({} as 'Insurance' extends keyof typeof __VLS_ctx ? { 'Insurance': typeof __VLS_ctx.Insurance; } : typeof __VLS_resolvedLocalAndGlobalComponents).Insurance;
const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({ ...{ onDel: {} as any, }, insurance: ((i)), index: (($index)), class: ("grid-content-item"), }));
({} as { Insurance: typeof __VLS_81; }).Insurance;
({} as { Insurance: typeof __VLS_81; }).Insurance;
const __VLS_83 = __VLS_82({ ...{ onDel: {} as any, }, insurance: ((i)), index: (($index)), class: ("grid-content-item"), }, ...__VLS_functionalComponentArgsRest(__VLS_82));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_81, typeof __VLS_83> & Record<string, unknown>) => void)({ ...{ onDel: {} as any, }, insurance: ((i)), index: (($index)), class: ("grid-content-item"), });
const __VLS_84 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83)!;
let __VLS_85!: __VLS_NormalizeEmits<typeof __VLS_84.emit>;
let __VLS_86 = { 'del': __VLS_pickEvent(__VLS_85['del'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_82, typeof __VLS_83>).onDel) };
__VLS_86 = {
del: $event => {
__VLS_ctx.del('insurance', $event);
// @ts-ignore
[insurances, del,];
}
};
}
}
(__VLS_79.slots!).default;
}
(__VLS_58.slots!).default;
}
(__VLS_53.slots!).default;
}
{
const __VLS_87 = ({} as 'ElRow' extends keyof typeof __VLS_ctx ? { 'ElRow': typeof __VLS_ctx.ElRow; } : 'elRow' extends keyof typeof __VLS_ctx ? { 'ElRow': typeof __VLS_ctx.elRow; } : 'el-row' extends keyof typeof __VLS_ctx ? { 'ElRow': (typeof __VLS_ctx)["el-row"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElRow;
const __VLS_88 = __VLS_asFunctionalComponent(__VLS_87, new __VLS_87({ ...{}, }));
({} as { ElRow: typeof __VLS_87; }).ElRow;
({} as { ElRow: typeof __VLS_87; }).ElRow;
const __VLS_89 = __VLS_88({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_88));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_87, typeof __VLS_89> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_90 = __VLS_pickFunctionalComponentCtx(__VLS_87, __VLS_89)!;
let __VLS_91!: __VLS_NormalizeEmits<typeof __VLS_90.emit>;
{
const __VLS_92 = ({} as 'ElCol' extends keyof typeof __VLS_ctx ? { 'ElCol': typeof __VLS_ctx.ElCol; } : 'elCol' extends keyof typeof __VLS_ctx ? { 'ElCol': typeof __VLS_ctx.elCol; } : 'el-col' extends keyof typeof __VLS_ctx ? { 'ElCol': (typeof __VLS_ctx)["el-col"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElCol;
const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({ ...{}, span: ((24)), }));
({} as { ElCol: typeof __VLS_92; }).ElCol;
({} as { ElCol: typeof __VLS_92; }).ElCol;
const __VLS_94 = __VLS_93({ ...{}, span: ((24)), }, ...__VLS_functionalComponentArgsRest(__VLS_93));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_92, typeof __VLS_94> & Record<string, unknown>) => void)({ ...{}, span: ((24)), });
const __VLS_95 = __VLS_pickFunctionalComponentCtx(__VLS_92, __VLS_94)!;
let __VLS_96!: __VLS_NormalizeEmits<typeof __VLS_95.emit>;
{
const __VLS_97 = __VLS_intrinsicElements["div"];
const __VLS_98 = __VLS_elementAsFunctionalComponent(__VLS_97);
const __VLS_99 = __VLS_98({ ...{}, style: ({}), class: ("bg-purple-dark"), }, ...__VLS_functionalComponentArgsRest(__VLS_98));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_97, typeof __VLS_99> & Record<string, unknown>) => void)({ ...{}, style: ({}), class: ("bg-purple-dark"), });
const __VLS_100 = __VLS_pickFunctionalComponentCtx(__VLS_97, __VLS_99)!;
let __VLS_101!: __VLS_NormalizeEmits<typeof __VLS_100.emit>;
(__VLS_100.slots!).default;
}
{
const __VLS_102 = ({} as 'ElButton' extends keyof typeof __VLS_ctx ? { 'ElButton': typeof __VLS_ctx.ElButton; } : 'elButton' extends keyof typeof __VLS_ctx ? { 'ElButton': typeof __VLS_ctx.elButton; } : 'el-button' extends keyof typeof __VLS_ctx ? { 'ElButton': (typeof __VLS_ctx)["el-button"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElButton;
const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({ ...{ onClick: {} as any, }, class: ("add-button"), type: ("primary"), }));
({} as { ElButton: typeof __VLS_102; }).ElButton;
({} as { ElButton: typeof __VLS_102; }).ElButton;
const __VLS_104 = __VLS_103({ ...{ onClick: {} as any, }, class: ("add-button"), type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_103));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_102, typeof __VLS_104> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("add-button"), type: ("primary"), });
const __VLS_105 = __VLS_pickFunctionalComponentCtx(__VLS_102, __VLS_104)!;
let __VLS_106!: __VLS_NormalizeEmits<typeof __VLS_105.emit>;
let __VLS_107 = { 'click': __VLS_pickEvent(__VLS_106['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_103, typeof __VLS_104>).onClick) };
__VLS_107 = {
click: $event => {
__VLS_ctx.addItem('bank', __VLS_ctx.banks);
// @ts-ignore
[addItem, banks,];
}
};
(__VLS_105.slots!).default;
}
{
const __VLS_108 = __VLS_intrinsicElements["div"];
const __VLS_109 = __VLS_elementAsFunctionalComponent(__VLS_108);
const __VLS_110 = __VLS_109({ ...{}, class: ("grid-content"), }, ...__VLS_functionalComponentArgsRest(__VLS_109));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_108, typeof __VLS_110> & Record<string, unknown>) => void)({ ...{}, class: ("grid-content"), });
const __VLS_111 = __VLS_pickFunctionalComponentCtx(__VLS_108, __VLS_110)!;
let __VLS_112!: __VLS_NormalizeEmits<typeof __VLS_111.emit>;
for (const [i, $index] of __VLS_getVForSourceType((__VLS_ctx.banks)!)) {
{
const __VLS_113 = ({} as 'Bank' extends keyof typeof __VLS_ctx ? { 'Bank': typeof __VLS_ctx.Bank; } : typeof __VLS_resolvedLocalAndGlobalComponents).Bank;
const __VLS_114 = __VLS_asFunctionalComponent(__VLS_113, new __VLS_113({ ...{ onDel: {} as any, }, bank: ((i)), index: (($index)), class: ("grid-content-item"), }));
({} as { Bank: typeof __VLS_113; }).Bank;
({} as { Bank: typeof __VLS_113; }).Bank;
const __VLS_115 = __VLS_114({ ...{ onDel: {} as any, }, bank: ((i)), index: (($index)), class: ("grid-content-item"), }, ...__VLS_functionalComponentArgsRest(__VLS_114));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_113, typeof __VLS_115> & Record<string, unknown>) => void)({ ...{ onDel: {} as any, }, bank: ((i)), index: (($index)), class: ("grid-content-item"), });
const __VLS_116 = __VLS_pickFunctionalComponentCtx(__VLS_113, __VLS_115)!;
let __VLS_117!: __VLS_NormalizeEmits<typeof __VLS_116.emit>;
let __VLS_118 = { 'del': __VLS_pickEvent(__VLS_117['del'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_114, typeof __VLS_115>).onDel) };
__VLS_118 = {
del: $event => {
__VLS_ctx.del('bank', $event);
// @ts-ignore
[banks, del,];
}
};
}
}
(__VLS_111.slots!).default;
}
(__VLS_95.slots!).default;
}
(__VLS_90.slots!).default;
}
{
const __VLS_119 = ({} as 'ElRow' extends keyof typeof __VLS_ctx ? { 'ElRow': typeof __VLS_ctx.ElRow; } : 'elRow' extends keyof typeof __VLS_ctx ? { 'ElRow': typeof __VLS_ctx.elRow; } : 'el-row' extends keyof typeof __VLS_ctx ? { 'ElRow': (typeof __VLS_ctx)["el-row"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElRow;
const __VLS_120 = __VLS_asFunctionalComponent(__VLS_119, new __VLS_119({ ...{}, }));
({} as { ElRow: typeof __VLS_119; }).ElRow;
({} as { ElRow: typeof __VLS_119; }).ElRow;
const __VLS_121 = __VLS_120({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_120));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_119, typeof __VLS_121> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_122 = __VLS_pickFunctionalComponentCtx(__VLS_119, __VLS_121)!;
let __VLS_123!: __VLS_NormalizeEmits<typeof __VLS_122.emit>;
{
const __VLS_124 = ({} as 'ElCol' extends keyof typeof __VLS_ctx ? { 'ElCol': typeof __VLS_ctx.ElCol; } : 'elCol' extends keyof typeof __VLS_ctx ? { 'ElCol': typeof __VLS_ctx.elCol; } : 'el-col' extends keyof typeof __VLS_ctx ? { 'ElCol': (typeof __VLS_ctx)["el-col"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElCol;
const __VLS_125 = __VLS_asFunctionalComponent(__VLS_124, new __VLS_124({ ...{}, span: ((24)), }));
({} as { ElCol: typeof __VLS_124; }).ElCol;
({} as { ElCol: typeof __VLS_124; }).ElCol;
const __VLS_126 = __VLS_125({ ...{}, span: ((24)), }, ...__VLS_functionalComponentArgsRest(__VLS_125));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_124, typeof __VLS_126> & Record<string, unknown>) => void)({ ...{}, span: ((24)), });
const __VLS_127 = __VLS_pickFunctionalComponentCtx(__VLS_124, __VLS_126)!;
let __VLS_128!: __VLS_NormalizeEmits<typeof __VLS_127.emit>;
{
const __VLS_129 = __VLS_intrinsicElements["div"];
const __VLS_130 = __VLS_elementAsFunctionalComponent(__VLS_129);
const __VLS_131 = __VLS_130({ ...{}, style: ({}), class: ("bg-purple-dark"), }, ...__VLS_functionalComponentArgsRest(__VLS_130));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_129, typeof __VLS_131> & Record<string, unknown>) => void)({ ...{}, style: ({}), class: ("bg-purple-dark"), });
const __VLS_132 = __VLS_pickFunctionalComponentCtx(__VLS_129, __VLS_131)!;
let __VLS_133!: __VLS_NormalizeEmits<typeof __VLS_132.emit>;
(__VLS_132.slots!).default;
}
{
const __VLS_134 = ({} as 'ElButton' extends keyof typeof __VLS_ctx ? { 'ElButton': typeof __VLS_ctx.ElButton; } : 'elButton' extends keyof typeof __VLS_ctx ? { 'ElButton': typeof __VLS_ctx.elButton; } : 'el-button' extends keyof typeof __VLS_ctx ? { 'ElButton': (typeof __VLS_ctx)["el-button"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElButton;
const __VLS_135 = __VLS_asFunctionalComponent(__VLS_134, new __VLS_134({ ...{ onClick: {} as any, }, class: ("add-button"), type: ("primary"), }));
({} as { ElButton: typeof __VLS_134; }).ElButton;
({} as { ElButton: typeof __VLS_134; }).ElButton;
const __VLS_136 = __VLS_135({ ...{ onClick: {} as any, }, class: ("add-button"), type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_135));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_134, typeof __VLS_136> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("add-button"), type: ("primary"), });
const __VLS_137 = __VLS_pickFunctionalComponentCtx(__VLS_134, __VLS_136)!;
let __VLS_138!: __VLS_NormalizeEmits<typeof __VLS_137.emit>;
let __VLS_139 = { 'click': __VLS_pickEvent(__VLS_138['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_135, typeof __VLS_136>).onClick) };
__VLS_139 = {
click: $event => {
__VLS_ctx.addItem('account', __VLS_ctx.accounts);
// @ts-ignore
[addItem, accounts,];
}
};
(__VLS_137.slots!).default;
}
{
const __VLS_140 = __VLS_intrinsicElements["div"];
const __VLS_141 = __VLS_elementAsFunctionalComponent(__VLS_140);
const __VLS_142 = __VLS_141({ ...{}, class: ("grid-content"), }, ...__VLS_functionalComponentArgsRest(__VLS_141));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_140, typeof __VLS_142> & Record<string, unknown>) => void)({ ...{}, class: ("grid-content"), });
const __VLS_143 = __VLS_pickFunctionalComponentCtx(__VLS_140, __VLS_142)!;
let __VLS_144!: __VLS_NormalizeEmits<typeof __VLS_143.emit>;
for (const [i, $index] of __VLS_getVForSourceType((__VLS_ctx.accounts)!)) {
{
const __VLS_145 = ({} as 'Account' extends keyof typeof __VLS_ctx ? { 'Account': typeof __VLS_ctx.Account; } : typeof __VLS_resolvedLocalAndGlobalComponents).Account;
const __VLS_146 = __VLS_asFunctionalComponent(__VLS_145, new __VLS_145({ ...{ onDel: {} as any, }, account: ((i)), index: (($index)), class: ("grid-content-item"), }));
({} as { Account: typeof __VLS_145; }).Account;
({} as { Account: typeof __VLS_145; }).Account;
const __VLS_147 = __VLS_146({ ...{ onDel: {} as any, }, account: ((i)), index: (($index)), class: ("grid-content-item"), }, ...__VLS_functionalComponentArgsRest(__VLS_146));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_145, typeof __VLS_147> & Record<string, unknown>) => void)({ ...{ onDel: {} as any, }, account: ((i)), index: (($index)), class: ("grid-content-item"), });
const __VLS_148 = __VLS_pickFunctionalComponentCtx(__VLS_145, __VLS_147)!;
let __VLS_149!: __VLS_NormalizeEmits<typeof __VLS_148.emit>;
let __VLS_150 = { 'del': __VLS_pickEvent(__VLS_149['del'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_146, typeof __VLS_147>).onDel) };
__VLS_150 = {
del: $event => {
__VLS_ctx.del('account', $event);
// @ts-ignore
[accounts, del,];
}
};
}
}
(__VLS_143.slots!).default;
}
(__VLS_127.slots!).default;
}
(__VLS_122.slots!).default;
}
{
const __VLS_151 = ({} as 'ElRow' extends keyof typeof __VLS_ctx ? { 'ElRow': typeof __VLS_ctx.ElRow; } : 'elRow' extends keyof typeof __VLS_ctx ? { 'ElRow': typeof __VLS_ctx.elRow; } : 'el-row' extends keyof typeof __VLS_ctx ? { 'ElRow': (typeof __VLS_ctx)["el-row"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElRow;
const __VLS_152 = __VLS_asFunctionalComponent(__VLS_151, new __VLS_151({ ...{}, }));
({} as { ElRow: typeof __VLS_151; }).ElRow;
({} as { ElRow: typeof __VLS_151; }).ElRow;
const __VLS_153 = __VLS_152({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_152));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_151, typeof __VLS_153> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_154 = __VLS_pickFunctionalComponentCtx(__VLS_151, __VLS_153)!;
let __VLS_155!: __VLS_NormalizeEmits<typeof __VLS_154.emit>;
{
const __VLS_156 = ({} as 'ElCol' extends keyof typeof __VLS_ctx ? { 'ElCol': typeof __VLS_ctx.ElCol; } : 'elCol' extends keyof typeof __VLS_ctx ? { 'ElCol': typeof __VLS_ctx.elCol; } : 'el-col' extends keyof typeof __VLS_ctx ? { 'ElCol': (typeof __VLS_ctx)["el-col"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElCol;
const __VLS_157 = __VLS_asFunctionalComponent(__VLS_156, new __VLS_156({ ...{}, span: ((24)), }));
({} as { ElCol: typeof __VLS_156; }).ElCol;
({} as { ElCol: typeof __VLS_156; }).ElCol;
const __VLS_158 = __VLS_157({ ...{}, span: ((24)), }, ...__VLS_functionalComponentArgsRest(__VLS_157));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_156, typeof __VLS_158> & Record<string, unknown>) => void)({ ...{}, span: ((24)), });
const __VLS_159 = __VLS_pickFunctionalComponentCtx(__VLS_156, __VLS_158)!;
let __VLS_160!: __VLS_NormalizeEmits<typeof __VLS_159.emit>;
{
const __VLS_161 = __VLS_intrinsicElements["div"];
const __VLS_162 = __VLS_elementAsFunctionalComponent(__VLS_161);
const __VLS_163 = __VLS_162({ ...{}, style: ({}), class: ("bg-purple-dark"), }, ...__VLS_functionalComponentArgsRest(__VLS_162));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_161, typeof __VLS_163> & Record<string, unknown>) => void)({ ...{}, style: ({}), class: ("bg-purple-dark"), });
const __VLS_164 = __VLS_pickFunctionalComponentCtx(__VLS_161, __VLS_163)!;
let __VLS_165!: __VLS_NormalizeEmits<typeof __VLS_164.emit>;
(__VLS_164.slots!).default;
}
{
const __VLS_166 = ({} as 'ElButton' extends keyof typeof __VLS_ctx ? { 'ElButton': typeof __VLS_ctx.ElButton; } : 'elButton' extends keyof typeof __VLS_ctx ? { 'ElButton': typeof __VLS_ctx.elButton; } : 'el-button' extends keyof typeof __VLS_ctx ? { 'ElButton': (typeof __VLS_ctx)["el-button"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElButton;
const __VLS_167 = __VLS_asFunctionalComponent(__VLS_166, new __VLS_166({ ...{ onClick: {} as any, }, class: ("add-button"), type: ("primary"), }));
({} as { ElButton: typeof __VLS_166; }).ElButton;
({} as { ElButton: typeof __VLS_166; }).ElButton;
const __VLS_168 = __VLS_167({ ...{ onClick: {} as any, }, class: ("add-button"), type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_167));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_166, typeof __VLS_168> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("add-button"), type: ("primary"), });
const __VLS_169 = __VLS_pickFunctionalComponentCtx(__VLS_166, __VLS_168)!;
let __VLS_170!: __VLS_NormalizeEmits<typeof __VLS_169.emit>;
let __VLS_171 = { 'click': __VLS_pickEvent(__VLS_170['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_167, typeof __VLS_168>).onClick) };
__VLS_171 = {
click: $event => {
__VLS_ctx.addItem('phone', __VLS_ctx.phones);
// @ts-ignore
[addItem, phones,];
}
};
(__VLS_169.slots!).default;
}
{
const __VLS_172 = __VLS_intrinsicElements["div"];
const __VLS_173 = __VLS_elementAsFunctionalComponent(__VLS_172);
const __VLS_174 = __VLS_173({ ...{}, class: ("grid-content "), }, ...__VLS_functionalComponentArgsRest(__VLS_173));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_172, typeof __VLS_174> & Record<string, unknown>) => void)({ ...{}, class: ("grid-content "), });
const __VLS_175 = __VLS_pickFunctionalComponentCtx(__VLS_172, __VLS_174)!;
let __VLS_176!: __VLS_NormalizeEmits<typeof __VLS_175.emit>;
for (const [i, $index] of __VLS_getVForSourceType((__VLS_ctx.phones)!)) {
{
const __VLS_177 = ({} as 'Phone' extends keyof typeof __VLS_ctx ? { 'Phone': typeof __VLS_ctx.Phone; } : typeof __VLS_resolvedLocalAndGlobalComponents).Phone;
const __VLS_178 = __VLS_asFunctionalComponent(__VLS_177, new __VLS_177({ ...{ onDel: {} as any, }, phone: ((i)), index: (($index)), class: ("grid-content-item"), }));
({} as { Phone: typeof __VLS_177; }).Phone;
({} as { Phone: typeof __VLS_177; }).Phone;
const __VLS_179 = __VLS_178({ ...{ onDel: {} as any, }, phone: ((i)), index: (($index)), class: ("grid-content-item"), }, ...__VLS_functionalComponentArgsRest(__VLS_178));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_177, typeof __VLS_179> & Record<string, unknown>) => void)({ ...{ onDel: {} as any, }, phone: ((i)), index: (($index)), class: ("grid-content-item"), });
const __VLS_180 = __VLS_pickFunctionalComponentCtx(__VLS_177, __VLS_179)!;
let __VLS_181!: __VLS_NormalizeEmits<typeof __VLS_180.emit>;
let __VLS_182 = { 'del': __VLS_pickEvent(__VLS_181['del'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_178, typeof __VLS_179>).onDel) };
__VLS_182 = {
del: $event => {
__VLS_ctx.del('phone', $event);
// @ts-ignore
[phones, del,];
}
};
}
}
(__VLS_175.slots!).default;
}
(__VLS_159.slots!).default;
}
(__VLS_154.slots!).default;
}
{
const __VLS_183 = ({} as 'ElRow' extends keyof typeof __VLS_ctx ? { 'ElRow': typeof __VLS_ctx.ElRow; } : 'elRow' extends keyof typeof __VLS_ctx ? { 'ElRow': typeof __VLS_ctx.elRow; } : 'el-row' extends keyof typeof __VLS_ctx ? { 'ElRow': (typeof __VLS_ctx)["el-row"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElRow;
const __VLS_184 = __VLS_asFunctionalComponent(__VLS_183, new __VLS_183({ ...{}, }));
({} as { ElRow: typeof __VLS_183; }).ElRow;
({} as { ElRow: typeof __VLS_183; }).ElRow;
const __VLS_185 = __VLS_184({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_184));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_183, typeof __VLS_185> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_186 = __VLS_pickFunctionalComponentCtx(__VLS_183, __VLS_185)!;
let __VLS_187!: __VLS_NormalizeEmits<typeof __VLS_186.emit>;
{
const __VLS_188 = ({} as 'ElCol' extends keyof typeof __VLS_ctx ? { 'ElCol': typeof __VLS_ctx.ElCol; } : 'elCol' extends keyof typeof __VLS_ctx ? { 'ElCol': typeof __VLS_ctx.elCol; } : 'el-col' extends keyof typeof __VLS_ctx ? { 'ElCol': (typeof __VLS_ctx)["el-col"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElCol;
const __VLS_189 = __VLS_asFunctionalComponent(__VLS_188, new __VLS_188({ ...{}, span: ((24)), }));
({} as { ElCol: typeof __VLS_188; }).ElCol;
({} as { ElCol: typeof __VLS_188; }).ElCol;
const __VLS_190 = __VLS_189({ ...{}, span: ((24)), }, ...__VLS_functionalComponentArgsRest(__VLS_189));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_188, typeof __VLS_190> & Record<string, unknown>) => void)({ ...{}, span: ((24)), });
const __VLS_191 = __VLS_pickFunctionalComponentCtx(__VLS_188, __VLS_190)!;
let __VLS_192!: __VLS_NormalizeEmits<typeof __VLS_191.emit>;
{
const __VLS_193 = __VLS_intrinsicElements["div"];
const __VLS_194 = __VLS_elementAsFunctionalComponent(__VLS_193);
const __VLS_195 = __VLS_194({ ...{}, style: ({}), class: ("bg-purple-dark"), }, ...__VLS_functionalComponentArgsRest(__VLS_194));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_193, typeof __VLS_195> & Record<string, unknown>) => void)({ ...{}, style: ({}), class: ("bg-purple-dark"), });
const __VLS_196 = __VLS_pickFunctionalComponentCtx(__VLS_193, __VLS_195)!;
let __VLS_197!: __VLS_NormalizeEmits<typeof __VLS_196.emit>;
(__VLS_196.slots!).default;
}
{
const __VLS_198 = ({} as 'ElButton' extends keyof typeof __VLS_ctx ? { 'ElButton': typeof __VLS_ctx.ElButton; } : 'elButton' extends keyof typeof __VLS_ctx ? { 'ElButton': typeof __VLS_ctx.elButton; } : 'el-button' extends keyof typeof __VLS_ctx ? { 'ElButton': (typeof __VLS_ctx)["el-button"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElButton;
const __VLS_199 = __VLS_asFunctionalComponent(__VLS_198, new __VLS_198({ ...{ onClick: {} as any, }, class: ("add-button"), type: ("primary"), }));
({} as { ElButton: typeof __VLS_198; }).ElButton;
({} as { ElButton: typeof __VLS_198; }).ElButton;
const __VLS_200 = __VLS_199({ ...{ onClick: {} as any, }, class: ("add-button"), type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_199));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_198, typeof __VLS_200> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("add-button"), type: ("primary"), });
const __VLS_201 = __VLS_pickFunctionalComponentCtx(__VLS_198, __VLS_200)!;
let __VLS_202!: __VLS_NormalizeEmits<typeof __VLS_201.emit>;
let __VLS_203 = { 'click': __VLS_pickEvent(__VLS_202['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_199, typeof __VLS_200>).onClick) };
__VLS_203 = {
click: $event => {
__VLS_ctx.addItem('noAccount', __VLS_ctx.noAccounts);
// @ts-ignore
[addItem, noAccounts,];
}
};
(__VLS_201.slots!).default;
}
{
const __VLS_204 = __VLS_intrinsicElements["div"];
const __VLS_205 = __VLS_elementAsFunctionalComponent(__VLS_204);
const __VLS_206 = __VLS_205({ ...{}, class: ("grid-content"), }, ...__VLS_functionalComponentArgsRest(__VLS_205));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_204, typeof __VLS_206> & Record<string, unknown>) => void)({ ...{}, class: ("grid-content"), });
const __VLS_207 = __VLS_pickFunctionalComponentCtx(__VLS_204, __VLS_206)!;
let __VLS_208!: __VLS_NormalizeEmits<typeof __VLS_207.emit>;
for (const [i, $index] of __VLS_getVForSourceType((__VLS_ctx.noAccounts)!)) {
{
const __VLS_209 = ({} as 'NoAccount' extends keyof typeof __VLS_ctx ? { 'NoAccount': typeof __VLS_ctx.NoAccount; } : typeof __VLS_resolvedLocalAndGlobalComponents).NoAccount;
const __VLS_210 = __VLS_asFunctionalComponent(__VLS_209, new __VLS_209({ ...{ onDel: {} as any, }, account: ((i)), index: (($index)), class: ("grid-content-item"), }));
({} as { NoAccount: typeof __VLS_209; }).NoAccount;
({} as { NoAccount: typeof __VLS_209; }).NoAccount;
const __VLS_211 = __VLS_210({ ...{ onDel: {} as any, }, account: ((i)), index: (($index)), class: ("grid-content-item"), }, ...__VLS_functionalComponentArgsRest(__VLS_210));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_209, typeof __VLS_211> & Record<string, unknown>) => void)({ ...{ onDel: {} as any, }, account: ((i)), index: (($index)), class: ("grid-content-item"), });
const __VLS_212 = __VLS_pickFunctionalComponentCtx(__VLS_209, __VLS_211)!;
let __VLS_213!: __VLS_NormalizeEmits<typeof __VLS_212.emit>;
let __VLS_214 = { 'del': __VLS_pickEvent(__VLS_213['del'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_210, typeof __VLS_211>).onDel) };
__VLS_214 = {
del: $event => {
__VLS_ctx.del('noAccount', $event);
// @ts-ignore
[noAccounts, del,];
}
};
}
}
(__VLS_207.slots!).default;
}
(__VLS_191.slots!).default;
}
(__VLS_186.slots!).default;
}
{
const __VLS_215 = ({} as 'ElRow' extends keyof typeof __VLS_ctx ? { 'ElRow': typeof __VLS_ctx.ElRow; } : 'elRow' extends keyof typeof __VLS_ctx ? { 'ElRow': typeof __VLS_ctx.elRow; } : 'el-row' extends keyof typeof __VLS_ctx ? { 'ElRow': (typeof __VLS_ctx)["el-row"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElRow;
const __VLS_216 = __VLS_asFunctionalComponent(__VLS_215, new __VLS_215({ ...{}, }));
({} as { ElRow: typeof __VLS_215; }).ElRow;
({} as { ElRow: typeof __VLS_215; }).ElRow;
const __VLS_217 = __VLS_216({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_216));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_215, typeof __VLS_217> & Record<string, unknown>) => void)({ ...{}, });
const __VLS_218 = __VLS_pickFunctionalComponentCtx(__VLS_215, __VLS_217)!;
let __VLS_219!: __VLS_NormalizeEmits<typeof __VLS_218.emit>;
{
const __VLS_220 = ({} as 'ElCol' extends keyof typeof __VLS_ctx ? { 'ElCol': typeof __VLS_ctx.ElCol; } : 'elCol' extends keyof typeof __VLS_ctx ? { 'ElCol': typeof __VLS_ctx.elCol; } : 'el-col' extends keyof typeof __VLS_ctx ? { 'ElCol': (typeof __VLS_ctx)["el-col"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElCol;
const __VLS_221 = __VLS_asFunctionalComponent(__VLS_220, new __VLS_220({ ...{}, span: ((24)), }));
({} as { ElCol: typeof __VLS_220; }).ElCol;
({} as { ElCol: typeof __VLS_220; }).ElCol;
const __VLS_222 = __VLS_221({ ...{}, span: ((24)), }, ...__VLS_functionalComponentArgsRest(__VLS_221));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_220, typeof __VLS_222> & Record<string, unknown>) => void)({ ...{}, span: ((24)), });
const __VLS_223 = __VLS_pickFunctionalComponentCtx(__VLS_220, __VLS_222)!;
let __VLS_224!: __VLS_NormalizeEmits<typeof __VLS_223.emit>;
{
const __VLS_225 = __VLS_intrinsicElements["div"];
const __VLS_226 = __VLS_elementAsFunctionalComponent(__VLS_225);
const __VLS_227 = __VLS_226({ ...{}, class: ("grid-content"), }, ...__VLS_functionalComponentArgsRest(__VLS_226));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_225, typeof __VLS_227> & Record<string, unknown>) => void)({ ...{}, class: ("grid-content"), });
const __VLS_228 = __VLS_pickFunctionalComponentCtx(__VLS_225, __VLS_227)!;
let __VLS_229!: __VLS_NormalizeEmits<typeof __VLS_228.emit>;
{
const __VLS_230 = ({} as 'ElButton' extends keyof typeof __VLS_ctx ? { 'ElButton': typeof __VLS_ctx.ElButton; } : 'elButton' extends keyof typeof __VLS_ctx ? { 'ElButton': typeof __VLS_ctx.elButton; } : 'el-button' extends keyof typeof __VLS_ctx ? { 'ElButton': (typeof __VLS_ctx)["el-button"]; } : typeof __VLS_resolvedLocalAndGlobalComponents).ElButton;
const __VLS_231 = __VLS_asFunctionalComponent(__VLS_230, new __VLS_230({ ...{ onClick: {} as any, }, type: ("primary"), }));
({} as { ElButton: typeof __VLS_230; }).ElButton;
({} as { ElButton: typeof __VLS_230; }).ElButton;
const __VLS_232 = __VLS_231({ ...{ onClick: {} as any, }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_231));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_230, typeof __VLS_232> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, type: ("primary"), });
const __VLS_233 = __VLS_pickFunctionalComponentCtx(__VLS_230, __VLS_232)!;
let __VLS_234!: __VLS_NormalizeEmits<typeof __VLS_233.emit>;
let __VLS_235 = { 'click': __VLS_pickEvent(__VLS_234['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_231, typeof __VLS_232>).onClick) };
__VLS_235 = { click: (__VLS_ctx.sumit) };
(__VLS_233.slots!).default;
}
(__VLS_228.slots!).default;
}
(__VLS_223.slots!).default;
}
(__VLS_218.slots!).default;
}
{
const __VLS_236 = ({} as 'AddItemDialog' extends keyof typeof __VLS_ctx ? { 'AddItemDialog': typeof __VLS_ctx.AddItemDialog; } : typeof __VLS_resolvedLocalAndGlobalComponents).AddItemDialog;
const __VLS_237 = __VLS_asFunctionalComponent(__VLS_236, new __VLS_236({ ...{}, ref: ("addDialog"), }));
({} as { AddItemDialog: typeof __VLS_236; }).AddItemDialog;
const __VLS_238 = __VLS_237({ ...{}, ref: ("addDialog"), }, ...__VLS_functionalComponentArgsRest(__VLS_237));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_236, typeof __VLS_238> & Record<string, unknown>) => void)({ ...{}, ref: ("addDialog"), });
const __VLS_239 = __VLS_pickFunctionalComponentCtx(__VLS_236, __VLS_238)!;
let __VLS_240!: __VLS_NormalizeEmits<typeof __VLS_239.emit>;
// @ts-ignore
(__VLS_ctx.addDialog);
}
(__VLS_48.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["avator"];
__VLS_styleScopedClasses["clearfix"];
__VLS_styleScopedClasses["title"];
__VLS_styleScopedClasses["box-card"];
__VLS_styleScopedClasses["bg-purple-dark"];
__VLS_styleScopedClasses["bg-purple-dark"];
__VLS_styleScopedClasses["add-button"];
__VLS_styleScopedClasses["grid-content"];
__VLS_styleScopedClasses["grid-content-item"];
__VLS_styleScopedClasses["bg-purple-dark"];
__VLS_styleScopedClasses["add-button"];
__VLS_styleScopedClasses["grid-content"];
__VLS_styleScopedClasses["grid-content-item"];
__VLS_styleScopedClasses["bg-purple-dark"];
__VLS_styleScopedClasses["add-button"];
__VLS_styleScopedClasses["grid-content"];
__VLS_styleScopedClasses["grid-content-item"];
__VLS_styleScopedClasses["bg-purple-dark"];
__VLS_styleScopedClasses["add-button"];
__VLS_styleScopedClasses["grid-content"];
__VLS_styleScopedClasses["grid-content-item"];
__VLS_styleScopedClasses["bg-purple-dark"];
__VLS_styleScopedClasses["add-button"];
__VLS_styleScopedClasses["grid-content"];
__VLS_styleScopedClasses["grid-content-item"];
__VLS_styleScopedClasses["grid-content"];
}
var __VLS_slots!: {};
// @ts-ignore
[sumit, addDialog,];
return __VLS_slots;
}
