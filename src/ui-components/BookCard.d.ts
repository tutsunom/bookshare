/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Book } from "../models";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type BookCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    Item?: Book;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function BookCard(props: BookCardProps): React.ReactElement;
