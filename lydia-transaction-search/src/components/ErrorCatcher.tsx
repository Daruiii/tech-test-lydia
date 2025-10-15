import { Component, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorCatcher extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-6 text-center text-gray-500 dark:text-gray-400 border border-gray-300 rounded">
          <AlertTriangle className="mx-auto mb-2 h-8 w-8" />
          <p>Something went wrong displaying this content</p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="mt-2 text-sm text-blue-500 hover:text-blue-600"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}