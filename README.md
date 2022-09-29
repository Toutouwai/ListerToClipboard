# Lister To Clipboard

Easily copy a selector for the current Lister filters or selected results to the clipboard. For superusers only.

![screencast](https://user-images.githubusercontent.com/1538852/192980530-13543492-7903-4842-bc8d-3e62c2409e9f.gif)


## Why?

Lister or [Lister Pro](https://processwire.com/store/lister-pro/) is handy for finding pages according to certain page attributes or field values and you can see the matched pages in a results list. 

Sometimes I want to run code on some or all the Lister results. Lister Pro allows results to be processed through [Page Action](https://processwire.com/store/lister-pro/#run-page-actions-find-pages-and-manipulate-them) modules but there are a couple of downsides to this:
* To execute custom code you would have to create a custom Page Action module and this may not be worth the trouble for a one-off operation.
* If you want to process only selected individual pages you can only select items from one page of the results. If you navigate to a different page within the paginated results the selection is lost.

Lister To Clipboard gives you an easy way to copy a selector for the current Lister filters or a selection within the results so you can paste it into the [Tracy Debugger Console](https://adrianbj.github.io/TracyDebugger/#/debug-bar?id=console) or use it elsewhere in your code.

## Usage

In Lister (Find) or in a Lister Pro instance, create filters to match the pages you want to target. 

If you want to select individual pages within the results, click an empty area of the cell within the first column (i.e. don't click directly on the page title). The cell will get a green background to indicate that it is selected. If there is more than one page of results you can move around the pagination to select more pages.

Below the Lister results there is a blue box showing a selector string that will find the pages shown in your Lister results (or your selection within those results) when used in `$pages->find()`. Click the copy icon to copy the selector to the clipboard, then you can paste it into the Tracy Debugger Console or wherever you want to use it.
