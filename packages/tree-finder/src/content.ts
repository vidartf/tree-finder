/******************************************************************************
 *
 * Copyright (c) 2020, Max Klein
 *
 * This file is part of the tree-finder library, distributed under the terms of
 * the BSD 3 Clause license.  The full license can be found in the LICENSE file.
 */
export const DEFAULT_COL = "path";

 export type Path = string[];

export interface IContentRow {
  path: Path;
  kind: string;
}

export interface IContent<T extends IContentRow> {
  children?: IContent<T>[];
  expanded?: boolean;
  row: T;
}